/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './form.scss';

class Form extends React.Component<object, object> {
  input: React.RefObject<HTMLInputElement> | null;

  inputt: React.RefObject<HTMLInputElement> | null;

  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.inputt = React.createRef();
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (this.input?.current) console.log(this.input.current.value);
    if (this.inputt?.current) console.log(this.inputt.current.value);
    console.log(this.input?.current?.name);
    event.preventDefault();
  }

  render() {
    return (
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
          />
          <div className="requirements">Minimum 2 words with minimum 3 letters</div>
        </label>

        <label>
          Greetings to*:
          <input name="to" type="text" ref={this.inputt} />
          <div className="requirements">Write the name of person</div>
        </label>

        <label>
          Date of greetings*:
          <input type="date" />
          <div className="requirements">Choose a date</div>
        </label>

        <label htmlFor="greetings-type">
          Type of greetings*:
          <select name="type" id="greetings-type">
            <option value="">--Please choose an option--</option>
            <option value="hi">Hi</option>
            <option value="thankyou">Thank you</option>
            <option value="sorry">Sorry</option>
          </select>
          <div className="requirements">Choose a type</div>
        </label>

        <div className="reason">
          <p>Reason:</p>
          <input type="checkbox" id="cool" />
          <label htmlFor="cool">You&apos;re cool</label>
          <input type="checkbox" id="friend" />
          <label htmlFor="friend">You&apos;re my friend</label>
          <input type="checkbox" id="like" />
          <label htmlFor="like">I like you</label>
        </div>

        <label>
          Movie advice & message*: <br />
          <input type="text" />
          <div className="requirements">Write a movie and/or message</div>
        </label>

        <div>
          <input type="radio" id="show" name="author" value="show" />
          <label htmlFor="show">Show author</label>
          <input type="radio" id="anonymous" name="author" value="anonymous" />
          <label htmlFor="anonymous">Anonymous</label>
        </div>

        <div>
          <label htmlFor="img">Add picture</label>
          <input type="file" id="img" name="img" accept="image/png, image/jpeg" />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
