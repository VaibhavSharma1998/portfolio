import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Try = () => {
  const [state, handleSubmit] = useForm('mwkjaaar');
  const [showMessage, setShowMessage] = useState(false);

  const handleFormSubmit = async (event) => {
    await handleSubmit(event);
    if (state.succeeded) {
      setShowMessage(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      {showMessage && (
        <div>
          Thank you for your submission! We will get back to you soon.
        </div>
      )}
    </div>
  );
};

export default Try;

