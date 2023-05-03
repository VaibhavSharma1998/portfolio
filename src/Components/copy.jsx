import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '@formspree/react';

const Contacts = () => {

    const [state, handleSubmit] = useForm("mwkjaaar");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div>
            <div className="d-flex flex-column">
                <main className="flex-shrink-0">
                    {/* Navigation */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
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
                                        {/* <!-- * * * * * * * * * * * * * * *-->
                                <!-- * * SB Forms Contact Form * *-->
                                <!-- * * * * * * * * * * * * * * *-->
                                <!-- This form is pre-integrated with SB Forms.-->
                                <!-- To make this form functional, sign up at-->
                                <!-- https://startbootstrap.com/solution/contact-forms-->
                                <!-- to get an API token!--> */}

                                        {/* <form id="contactForm" data-sb-form-api-token="API_TOKEN"> */}
                                        <form onSubmit={handleSubmit} action='https://formspree.io/f/mwkjaaar' method='POST'>
                                            {/* Name input */}
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" name='name' />
                                                <label for="name">Full name</label>
                                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                            </div>
                                            {/* Email address input */}
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" name='email' />
                                                <label for="email">Email address</label>
                                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                            </div>
                                            {/* Phone number input */}
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" name='phone' />
                                                <label for="phone">Phone number</label>
                                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                            </div>
                                            {/* Message input */}
                                            <div className="form-floating mb-3">
                                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: '10rem' }} data-sb-validations="required" name='message'></textarea>
                                                <label for="message">Message</label>
                                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                            </div>
                                            {/* <!-- Submit success message-->
                                    <!---->
                                    <!-- This is what your users will see when the form-->
                                    <!-- has successfully submitted--> */}
                                            <div className="d-none" id="submitSuccessMessage">
                                                <div className="text-center mb-3">
                                                    <div className="fw-bolder">Form submission successful!</div>
                                                    {/* To activate this form, sign up at */}
                                                    <br />
                                                    {/* <Link to="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</Link> */}
                                                </div>
                                            </div>
                                            {/* <!-- Submit error message-->
                                    <!---->
                                    <!-- This is what your users will see when there is-->
                                    <!-- an error submitting the form--> */}
                                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                            {/* Submit Button */}
                                            <div className="d-grid"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit" disabled={state.submitting}>Submit</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                
            </div>
        </div>
    )
}

export default Contacts
