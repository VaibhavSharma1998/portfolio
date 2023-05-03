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
      {/* <form onSubmit={handleFormSubmit}>
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
      )} */}
      <div class="project-card-view card">
                    <img class="card-img-top" src="/static/media/Admin-Panel-Dashboard.c97506c9510babb9ec52.png" alt="card-img"/>
                        <div class="card-body">
                            <div class="card-title h5">Dashboard Panel</div>
                            <p class="card-text" style="text-align: justify;">User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration.</p>
                            <a role="button" tabindex="0" href="https://rahul-dashboard-pannel.netlify.app" target="_blank" class="viewbtn btn btn-primary">View</a>

                    </div>
                    </div>
    </div>
  );
};

export default Try;

