import React from 'react'
import { Link } from 'react-router-dom';

import './style.css'
import projectImage1 from '../Image/projectImage1.png'
import projectImage2 from '../Image/projectImage2.png'
import projectImage3 from '../Image/projectImage3.png'

const Projects = () => {
    return (
        <div className='d-flex flex-column h-100 bg-light'>
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

                {/* Projects Section */}
                <section className="py-5" >
                    <div className="container px-5 mb-5">
                        <div className="text-center mb-5">
                            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-11 col-xl-9 col-xxl-8">
                                {/* Project Card 1 */}
                                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <h2 className="fw-bolder text-center">World Weather App</h2>
                                                <div className='text-sm-center text-md-start'>
                                                    World Weather is a weather application built using React.js and OpenWeatherMap API. It provides real-time weather information for cities around the world.
                                                    <br />
                                                    <a href="https://vaibhavsharma1998.github.io/weather-app/">Weather App Preview</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <img className="img-fluid" src={projectImage1} alt="..." />
                                            </div>
                                        </div>
                                        {/* <div className="d-flex align-items-center">
                                            <div className="p-5">
                                                <h2 className="fw-bolder">Project Name 1</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                            </div>
                                            <img className="img-fluid" src={projectImage1} alt="..." />
                                        </div> */}
                                    </div>
                                </div>
                                {/* Project Card 2 */}
                                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <h2 className="fw-bolder text-center">To Do List,App</h2>
                                                <div className='text-sm-center text-md-start'>
                                                    This applicattion was designed in REACT JS. It performs basic CRUD operation using useState and
                                                    useEfeect Hooks with full responsive interface.
                                                    <br />
                                                    <a href="https://vaibhavsharma1998.github.io/todo-list/">To Do List App, Preview</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <img className="img-fluid" src={projectImage3} alt="..." />
                                            </div>
                                        </div>
                                        {/* <div className="d-flex align-items-center">
                                            <div className="p-5">
                                                <h2 className="fw-bolder">Project Name 2</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                                            </div>
                                            <img className="img-fluid" src={projectImage3} alt="..." />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to action section */}
                <section className="py-5 bg-gradient-primary-to-secondary text-white">
                    <div className="container px-5 my-5">
                        <div className="text-center">
                            <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                            <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/Contacts">Contact me</Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white py-4 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto"><div className="small m-0">Copyright &copy; Your Website 2023</div></div>
                        {/* <div className="col-auto">
                            <Link className="small" to="#!">Privacy</Link>
                            <span className="mx-1">&middot;</span>
                            <Link className="small" to="#!">Terms</Link>
                            <span className="mx-1">&middot;</span>
                            <Link className="small" to="#!">Contact</Link>
                        </div> */}
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Projects
