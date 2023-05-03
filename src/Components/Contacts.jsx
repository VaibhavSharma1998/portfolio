import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

const Contacts = () => {
    const [state, handleSubmit] = useForm('mwkjaaar');
    const [showMessage, setShowMessage] = useState(false);

    const handleFormSubmit = async (event) => {
        await handleSubmit(event);
        if (state.succeeded) {
            setShowMessage({ show: true, close: false });
            event.target.reset();
        }
    };

    useEffect(() => {
        let timeout;
        if (showMessage.show) {
            timeout = setTimeout(() => {
                setShowMessage({ ...showMessage, show: false });
            }, 5000);
        }
        return () => clearTimeout(timeout);
    }, [showMessage]);

    const handleClose = () => {
        setShowMessage({ ...showMessage, close: true });
    }
    
    return (
        <div>
            <div className="d-flex flex-column">
                <main className="flex-shrink-0">
                    {/* Navigation */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 ">
                        <div className="container px-5">
                            <Link className="navbar-brand" to="/"><span className="fw-bolder text-primary">Vaibhav Sharma</span></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                    <li className="nav-item"><Link to="/Resume" className="nav-link">Resume</Link></li>
                                    <li className="nav-item"><Link to="/Projects" className="nav-link">Projects</Link></li>
                                    <li className="nav-item"><Link to="/Contacts" className="nav-link">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Page content */}
                    <section className="py-5">
                        <div className="container px-5">
                            {/* Contact form */}
                            <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                                <div className="text-center mb-5">
                                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                                    <h1 className="fw-bolder">Get in touch</h1>
                                    <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                                </div>
                                <div className="row gx-5 justify-content-center">
                                    <div className="col-lg-8 col-xl-6">

                                        <form onSubmit={handleFormSubmit} action="https://formspree.io/your-email-address" method="POST">
                                            {/* Name input */}
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." name='name' required/>
                                                <label htmlFor="name">Full name</label>
                                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                                            </div>
                                            {/* Email address input */}
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="email" type="email" placeholder="name@example.com" name='email'  required/>
                                                <label htmlFor="email">Email address</label>
                                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                                            </div>
                                            {/* Phone number input */}
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" name='phone' required/>
                                                <label htmlFor="phone">Phone number</label>
                                                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                                            </div>
                                            {/* Message input */}
                                            <div className="form-floating mb-3">
                                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: '10rem' }} name='message' required></textarea>
                                                <label htmlFor="message">Message</label>
                                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                                            </div>


                                            {/* Submit Button */}
                                            <div className="d-grid"><button className="btn btn-primary btn-lg " id="submitButton" type="submit" disabled={state.submitting}>Submit</button></div>
                                        </form>
                                        {showMessage.show && (
                                            <div className={`alert alert-success alert-dismissible fade ${showMessage.close ? 'd-none' : 'show'}`} role="alert">
                                            Thank you for your submission! We will get back to you soon.
                                            <button type="button" className="btn-close" onClick={handleClose}></button>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                 {/* Footer */}
    <footer className="bg-light py-4">
      <div className="container px-5">
        <div className="row gx-5">
          <div className="col-lg-6 col-xl-6 text-center text-lg-start mb-2 mb-lg-0">
            <p className="text-muted mb-0 fw-bold">
              &copy; Vaibhav Sharma 2023. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
            </div>
        </div>
    )
}

export default Contacts
