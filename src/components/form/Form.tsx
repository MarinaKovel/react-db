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
    formState: { errors },
    reset,
    formState,
  } = useForm<TForm>();
  const [answer, setAnswer] = useState<TForm>({
    from: '',
    to: '',
    date: '',
    type: '',
    reason: [],
    message: '',
    author: 'Anonymous',
    image: '',
  });
  const [opacity, setOpacity] = useState('0');
  const [answers, setAnswers] = useState<TForm[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'reason') {
      setAnswer((prevState) => ({
        ...prevState,
        reason: [...prevState.reason, event.target.value],
      }));
    } else {
      setAnswer((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
    if (event.target.files) {
      setAnswer({ ...answer, image: URL.createObjectURL(event.target.files[0]) });
      setOpacity('0');
    }
  };

  const onSubmit = handleSubmit((data) => {
    setAnswer({
      ...answer,
      type: data.type,
      from: data.from,
      to: data.to,
      date: data.date,
      reason: data.reason,
      message: data.message,
      author: data.author,
    });
    alert('Data has been saved');
    setAnswers([...answers, answer]);
    setOpacity('0');
    setAnswer({ ...answer, reason: [] });
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset();
  }, [formState, answer, reset]);

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
            onChange={handleChange}
          />
          <div className="requirements">{errors.from?.message}</div>
        </label>

        <label>
          Greetings to:
          <input
            {...register('to', { required: 'Write the name of person' })}
            name="to"
            type="text"
            onChange={handleChange}
          />
          <div className="requirements">{errors.to?.message}</div>
        </label>

        <label>
          Date of greetings:
          <input
            {...register('date', { required: 'Choose a date' })}
            name="date"
            type="date"
            onChange={handleChange}
          />
          <div className="requirements">{errors.date?.message}</div>
        </label>

        <Select
          label="Type of greetings:"
          {...register('type')}
          name="type"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setAnswer((prevState) => ({ ...prevState, type: event.target.value }));
          }}
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
              onChange={handleChange}
            />
            You are cool
          </label>
          <label>
            <input
              {...register('reason', { required: 'Please select option' })}
              name="reason"
              type="checkbox"
              value="You are my friend"
              onChange={handleChange}
            />
            You are my friend
          </label>
          <label>
            <input
              {...register('reason', { required: 'Please select option' })}
              name="reason"
              type="checkbox"
              value="I like you"
              onChange={handleChange}
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
            onChange={handleChange}
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
              onChange={handleChange}
            />
            Show author
          </label>
          <label>
            <input
              {...register('author', { required: 'Choose a signature' })}
              type="radio"
              name="author"
              value="anonymous"
              onChange={handleChange}
            />
            Anonymous
          </label>
          <div className="requirements">{errors.author?.message}</div>
        </div>

        <div>
          <label>
            Add picture
            <input
              {...register('image', { required: true })}
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
            <div className="requirements" style={{ opacity }}>
              Choose a picture
            </div>
          </label>
        </div>

        <button type="submit" onClick={() => (!answer.image ? setOpacity('1') : '')}>
          Submit
        </button>
      </form>

      {answers.map((el, i) => (
        <Answers key={`${i}+${el.to}`} answer={el} />
      ))}
    </>
  );
}

export default Form;
