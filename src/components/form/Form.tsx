import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './form.scss';
import Answers from '../answers/Answers';
import Select from './Select';
import { TForm } from '../../types';

function Form() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
    reset,
  } = useForm<TForm>();
  const [answers, setAnswers] = useState<TForm[]>([]);

  const onSubmit = handleSubmit((data: TForm) => {
    const link = URL.createObjectURL(data.image[0] as unknown as Blob);
    alert('Data has been saved');
    setAnswers([
      ...answers,
      {
        image: link,
        type: data.type,
        from: data.from,
        to: data.to,
        date: data.date,
        reason: data.reason,
        message: data.message,
        author: data.author,
      },
    ]);
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset();
  }, [formState, reset]);

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <h1>Movie adviser</h1>
        <p className="form__text-yellow">All the fields are required!</p>

        <label>
          Your name:
          <input
            {...register('from', {
              required: 'fill in',
              minLength: { value: 3, message: '>= 3 letters' },
            })}
            name="from"
            type="text"
          />
          <div className="requirements">{errors.from?.message}</div>
        </label>

        <label>
          Greetings to:
          <input
            {...register('to', { required: 'Write the name of person' })}
            name="to"
            type="text"
          />
          <div className="requirements">{errors.to?.message}</div>
        </label>

        <label>
          Date of greetings:
          <input {...register('date', { required: 'Choose a date' })} name="date" type="date" />
          <div className="requirements">{errors.date?.message}</div>
        </label>

        <Select
          label="Type of greetings:"
          {...register('type', { required: 'Choose a type' })}
          name="type"
        />
        <div className="requirements">{errors.type?.message}</div>

        <div className="reason">
          <p>Reason:</p>
          <label>
            <input
              {...register('reason', { required: 'Select at list one option' })}
              name="reason"
              type="checkbox"
              value="You are cool"
            />
            You are cool
          </label>
          <label>
            <input
              {...register('reason', { required: 'Please select option' })}
              name="reason"
              type="checkbox"
              value="You are my friend"
            />
            You are my friend
          </label>
          <label>
            <input
              {...register('reason', { required: 'Please select option' })}
              name="reason"
              type="checkbox"
              value="I like you"
            />
            I like you
          </label>
        </div>
        <div className="requirements">{errors.reason?.message}</div>

        <label>
          Movie advice & message: <br />
          <input
            {...register('message', { required: 'Write a movie and/or message' })}
            name="message"
            type="text"
          />
          <div className="requirements">{errors.message?.message}</div>
        </label>

        <div>
          <label>
            <input
              {...register('author', { required: 'Choose a signature' })}
              type="radio"
              name="author"
              value="show"
            />
            Show author
          </label>
          <label>
            <input
              {...register('author', { required: 'Choose a signature' })}
              type="radio"
              name="author"
              value="anonymous"
            />
            Anonymous
          </label>
          <div className="requirements">{errors.author?.message}</div>
        </div>

        <div>
          <label>
            Add picture
            <input
              {...register('image', { required: 'Choose a picture' })}
              type="file"
              name="image"
              accept="image/*"
            />
            <div className="requirements">{errors.image?.message}</div>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {answers.map((el, i) => (
        <Answers key={`${i}+${el.to}`} answer={el} />
      ))}
    </>
  );
}

export default Form;
