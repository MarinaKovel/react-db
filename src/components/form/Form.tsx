/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './form.scss';
import Answers, { TForm } from '../answers/Answers';

interface InputType {
  form: TForm;
  arr: TForm[];
}

class Form extends React.Component<object, InputType> {
  input: React.RefObject<HTMLInputElement>;

  select: React.RefObject<HTMLSelectElement>;

  constructor(props: InputType) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.input = React.createRef();
    this.select = React.createRef();
    this.state = {
      form: {
        from: '',
        to: '',
        date: '',
        type: '',
        isCool: '',
        isFriend: '',
        doLike: '',
        message: '',
        author: 'Anonymous',
        image: '',
      },
      arr: [],
    };
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this?.input?.current?.files) {
      const link = URL.createObjectURL(this.input.current.files[0]);
      this.setState((prevState) => ({
        ...prevState,
        form: {
          ...prevState.form,
          image: link,
        },
      }));
    }
    this.setState(
      (prevState) => ({
        ...prevState,
        arr: [...prevState.arr, prevState.form],
      }),
      () => console.log(this.state.arr)
    );

    alert('Data has been saved');
    (event.target as HTMLFormElement).reset();

    this.setState(
      (prevState) => ({
        ...prevState,
        form: {
          from: '',
          to: '',
          date: '',
          type: '',
          isCool: '',
          isFriend: '',
          doLike: '',
          message: '',
          author: 'Anonymous',
          image: '',
        },
      }),
      () => console.log(this.state.arr)
    );
  }

  onChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [event.target.name]: event.target.value.toString(),
      },
    }));
  }

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Movie adviser</h1>
          <p className="form__text-yellow">Required fields are followed by *</p>

          <label>
            Your name*:
            <input
              name="from"
              type="text"
              // pattern="([A-Za-zА-Яа-яЁё]{3,} ){1}([A-Za-zА-Яа-яЁё]{3,}[ ]?){1,}"
              ref={this.input}
              onChange={this.onChange}
            />
            <div className="requirements">Minimum 2 words with minimum 3 letters</div>
          </label>

          <label>
            Greetings to*:
            <input name="to" type="text" ref={this.input} onChange={this.onChange} />
            <div className="requirements">Write the name of person</div>
          </label>

          <label>
            Date of greetings*:
            <input name="date" type="date" ref={this.input} onChange={this.onChange} />
            <div className="requirements">Choose a date</div>
          </label>

          <label htmlFor="greetings-type">
            Type of greetings*:
            <select
              name="type"
              id="greetings-type"
              value={this.state.form.type}
              ref={this.select}
              onChange={this.onChange}
            >
              <option value="">--Please choose an option--</option>
              <option value="hi">Hi</option>
              <option value="thank you">Thank you</option>
              <option value="sorry">Sorry</option>
            </select>
            <div className="requirements">Choose a type</div>
          </label>

          <div className="reason">
            <p>Reason:</p>
            <input
              name="isCool"
              type="checkbox"
              id="cool"
              value="You are cool"
              ref={this.input}
              onChange={this.onChange}
            />
            <label htmlFor="cool">You are cool</label>
            <input
              name="isFriend"
              type="checkbox"
              id="friend"
              value="You are my friend"
              ref={this.input}
              onChange={this.onChange}
            />
            <label htmlFor="friend">You are my friend</label>
            <input
              name="doLike"
              type="checkbox"
              id="like"
              value="I like you"
              ref={this.input}
              onChange={this.onChange}
            />
            <label htmlFor="like">I like you</label>
          </div>

          <label>
            Movie advice & message*: <br />
            <input name="message" type="text" ref={this.input} onChange={this.onChange} />
            <div className="requirements">Write a movie and/or message</div>
          </label>

          <div>
            <input
              type="radio"
              id="show"
              name="author"
              value="show"
              ref={this.input}
              onChange={this.onChange}
            />
            <label htmlFor="show">Show author</label>
            <input
              type="radio"
              id="anonymous"
              name="author"
              value="anonymous"
              ref={this.input}
              onChange={this.onChange}
            />
            <label htmlFor="anonymous">Anonymous</label>
          </div>

          <div>
            <label htmlFor="img">Add picture</label>
            <input type="file" id="img" name="image" accept="image/*" ref={this.input} />
          </div>

          <button type="submit">Submit</button>
        </form>

        {this.state.arr.map((form, i) => (
          <Answers
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}+${form.to}`}
            from={form.from}
            to={form.to}
            date={form.date}
            type={form.type}
            isCool={form.isCool}
            isFriend={form.isFriend}
            doLike={form.doLike}
            message={form.message}
            author={form.author}
            image={form.image}
          />
        ))}
      </>
    );
  }
}
export default Form;
