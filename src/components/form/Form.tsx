import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TForm } from 'types';
import { Select, Input, Button } from '@components';
import { useAppDispatch } from '../../hooks/redux';
import { answersSlice } from '../../reducers/AnswersSlice';
import './form.scss';

export function Form() {
  const { setAnswers } = answersSlice.actions;
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
    reset,
  } = useForm<TForm>();

  const [isSaved, setIsSaved] = useState(false);

  const onSubmit = handleSubmit((data: TForm) => {
    const link = URL.createObjectURL(data.image[0] as unknown as Blob);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 1000);

    dispatch(
      setAnswers({
        image: link,
        type: data.type,
        from: data.from,
        to: data.to,
        date: data.date,
        reason: data.reason,
        message: data.message,
        author: data.author,
      })
    );
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset();
  }, [formState, reset]);

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1>Movie adviser</h1>
      <p className="form__text-yellow">All the fields are required!</p>

      <Input
        {...register('from', {
          required: 'Fill in',
          minLength: { value: 3, message: '>= 3 letters' },
        })}
        name="from"
        type="text"
        label="Your name:"
        error={errors.from?.message}
      />

      <Input
        {...register('to', { required: 'Write the name of person' })}
        name="to"
        type="text"
        label="Greetings to:"
        error={errors.to?.message}
      />

      <Input
        {...register('date', { required: 'Choose a date' })}
        name="date"
        type="date"
        label="Date of greetings:"
        error={errors.date?.message}
      />

      <Select
        label="Type of greetings: "
        {...register('type', { required: 'Choose a type' })}
        name="type"
        error={errors.type?.message}
      />

      <p>Reason:</p>
      <div className="reason">
        <Input
          {...register('reason', { required: 'Select at list one option' })}
          name="reason"
          type="checkbox"
          value="You are cool"
          label="You are cool"
        />
        <Input
          {...register('reason', { required: 'Select at list one option' })}
          name="reason"
          type="checkbox"
          value="You are my friend"
          label="You are my friend"
        />
        <Input
          {...register('reason', { required: 'Select at list one option' })}
          name="reason"
          type="checkbox"
          value="I like you"
          label="I like you"
        />
      </div>
      <div className="requirements">{errors.reason?.message}</div>

      <Input
        {...register('message', { required: 'Write a movie and/or message' })}
        name="message"
        type="text"
        label="Movie advice & message:"
        error={errors.message?.message}
      />

      <div className="form__radio">
        <Input
          {...register('author', { required: 'Choose a signature' })}
          type="radio"
          name="author"
          value="show"
          label="Show author"
        />
        <Input
          {...register('author', { required: 'Choose a signature' })}
          type="radio"
          name="author"
          value="anonymous"
          label="Anonymous"
        />
      </div>
      <div className="requirements">{errors.author?.message}</div>

      <Input
        {...register('image', { required: 'Choose a picture' })}
        type="file"
        name="image"
        label="Add picture"
        accept="image/*"
        error={errors.image?.message}
      />

      <Button name="Submit" />
      {isSaved && <p>Data has been saved</p>}
    </form>
  );
}
