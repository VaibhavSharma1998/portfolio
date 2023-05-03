import React from 'react'
import { Link } from 'react-router-dom';


const Resume = () => {
    return (
        <div className='"d-flex flex-column h-100 bg-light'>
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

                {/* Page Content */}
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            {/* Experience Section */}
                            <section>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h2 className="text-primary fw-bolder mb-0">Experience</h2>

                                    {/* <Link className="btn btn-primary px-4 py-3  bi bi-download" to='https://drive.google.com/file/d/1FIgTNyRN3Ws4EjDWutdpTHHNaBeysPOT/view'>   Download Resume</Link> */}
                                    <a className="btn btn-primary ms-1 " href="https://drive.google.com/file/d/1FIgTNyRN3Ws4EjDWutdpTHHNaBeysPOT/view" target="_blank" rel="noopener noreferrer">Download Resume</a>


                                </div>
                                {/* Experience Card 1 */}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-primary fw-bolder mb-2">12th Dec,2022 &nbsp;</div>
                                                    <div className="small fw-bolder">React Js Developer</div>
                                                    <div className="small text-muted">Karvi World Travels</div>
                                                    <div className="small text-muted">Phase 8b,Mohali</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8"><div>👨🏻‍💻 Converted PSD to responsive website using
                                                React JS.<br />
                                                👨🏻‍💻 Implemented routing using React Router.<br />
                                                👨🏻‍💻 Applied Form Validation using React-hook libraray.<br />
                                                👨🏻‍💻 API implemented using Axios.<br />
                                                👨🏻‍💻 Integrated Bootstrap for UI styling.
                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Experience Card 2 */}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-primary fw-bolder mb-2">Sep 2021-Oct 2022</div>
                                                    <div className="small fw-bolder">Telecaller Sales Executive (B2B)</div>
                                                    <div className="small text-muted">SBM Pharmaceuticals</div>
                                                    <div className="small text-muted">Ambala Cantt,Haryana</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8"><div>👨🏻‍💼 Building and maintaining customer relationships.<br />
                                                👨🏻‍💼 Making outbound calls to potential customers.<br />
                                                👨🏻‍💼 Identifying new sales opportunities.<br />
                                                👨🏻‍💼 Meeting sales targets.<br />
                                                👨🏻‍💼 Handling customer complaints and resolving issues.</div></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Education Section */}
                            <section>
                                <h2 className="text-secondary fw-bolder mb-4 ">Education</h2>
                                {/* Education Card 1 */}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-secondary fw-bolder mb-2">2016 - 2019</div>
                                                    <div className="mb-2">
                                                        <div className="small fw-bolder">DAV College</div>
                                                        <div className="small text-muted">Ambala City,Haryana</div>
                                                    </div>
                                                    <div className="fst-italic">
                                                        {/* <div className="small text-muted">Master's</div> */}
                                                        <div className="small text-muted">Bachelor of science</div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div className="col-lg-8"><div>👨🏻‍💻 I served in the NCC(National Cadet Corps) for three years, holding the rank of Sergeant.<br />
                                                👨🏻‍💻 Haryana State Merit scholarship holder.<br />
                                                👨🏻‍💻 Represented my college at the district level in science quiz.<br />
                                                👨🏻‍💻 API implemented using Axios.<br />
                                                👨🏻‍💻 Integrated Bootstrap for UI styling.</div></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Education Card 2 */}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-secondary fw-bolder mb-2">2015 - 2016</div>
                                                    <div className="mb-2">
                                                        <div className="small fw-bolder">GSSS</div>
                                                        <div className="small text-muted">Prem Nagar, Ambala </div>
                                                    </div>
                                                    <div className="fst-italic">
                                                        <div className="small text-muted">Sr. Secondary</div>
                                                        <div className="small text-muted">Non Medical</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8"><div>👨🏻‍💻 Converted PSD to responsive website using
                                                React JS.<br />
                                                👨🏻‍💻 Implemented routing using React Router.<br />
                                                👨🏻‍💻 Applied Form Validation using React-hook libraray.<br />
                                                👨🏻‍💻 API implemented using Axios.<br />
                                                👨🏻‍💻 Integrated Bootstrap for UI styling.</div></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Divider */}
                            <div className="pb-5"></div>
                            {/* Skills Section */}
                            <section>
                                {/* Skillset Card */}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        {/* Professional skills list */}
                                        <div className="mb-5">
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                                <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Technical Skills</span></h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">React Js</div></div>
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Redux</div></div>
                                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3">
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Git</div></div>
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                                            </div>
                                        </div>
                                        {/* Languages list */}
                                        <div className="mb-0">
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                                                <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Soft Skills</span></h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Communication </div></div>
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Marketing</div></div>
                                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Sales</div></div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3">
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Emotional intelligence</div></div>
                                                <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Creativity</div></div>
                                                <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Problem-solving</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white py-4 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto"><div className="small m-0">Copyright &copy; Your Website 2023</div></div>
                        {/* <div className="col-auto">
                            <Link className="small" to="#">Privacy</Link>
                            <span className="mx-1">&middot;</span>
                            <Link className="small" to="#">Terms</Link>
                            <span className="mx-1">&middot;</span>
                            <Link className="small" to="#">Contact</Link>
                        </div> */}
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Resume
