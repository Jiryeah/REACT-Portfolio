import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactModal = () => {
  const [formInput, setFormInput] = useState({ name: '', email: '', message: '' });
  // destructure formInput object
  const { name, email, message } = formInput;

  // configure conditionally rendering error message for incorrect inputs
  const [errMessage, setErrMessage] = useState('');

  // sync the state of the component with the DOM gathered user input
  const syncChange = (e) => {
    if (e.target.name === 'email') {
      const correctInput = validateEmail(e.target.value);
      if (!correctInput) {
        setErrMessage('Your email was found to be invalid.');
      } else {
        setErrMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrMessage(`${e.target.name} is required, please.`);
      } else {
        setErrMessage('');
      }
    }
    // Will implement a spread operator to retain all key value pairs without them getting overwritten
    if (!errMessage) {
      setFormInput({ ...formInput, [e.target.name]: e.target.value });
    }
  };

  const submission = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h1>Contact me</h1>
      <form id='' onSubmit={submission}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' defaultValue={name} onBlur={syncChange} name='name' />
        </div>
        <div>
          <label htmlFor='email'>Email address</label>
          <input type='email' defaultValue={email} onBlur={syncChange} name='email' />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea name='message' defaultValue={message} onBlur={syncChange} rows='5' />
        </div>
        {errMessage && (
          <div>
            <p className=''>{errMessage}</p>
          </div>
        )}
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default ContactModal;
