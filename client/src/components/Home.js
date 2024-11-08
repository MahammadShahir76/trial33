import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

function Home() {

    return (
        <div>
            <div className="hero-section">

                <nav className='NavBar'>
                    <div className="logo">
                        <h3>NextGen-Hire</h3>
                    </div>
                    <div className="login-home">
                        <a href="Home">Home</a>
                        <button>
                            Login
                        </button>
                    </div>
                </nav>
                <div className="heading">
                    <h1>Lets Take an Interview</h1>
                    <h1>to Another Level</h1>
                    <div className="para">
                        <p>
                            At NextGen-Hire, senior developers shape tech talent by streamlining the interview process and</p> <p>efficiently assessing candidates while recommending the best talent to companies.</p></div>
                </div>
                <div className="card-parent">
                    <div className="card">
                        <div className="box2">
                            <div className='Box1'>
                                <div className="box1-logo">
                                    <img src="./images/Identification.png" alt="" />
                                </div>
                                <div className="Link">
                                    <Link to="/CandiadteInfo"><h2>Alumini</h2></Link>
                                    <p>NextGen-Hire effortlessly connects companies with fresh talent, enabling them to share details about freshers and ensuring a strong fit for their specific hiring needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="box2">
                            <div className='Box1'>
                                <div className="box1-logo">
                                    <img src="./images/Business.png" alt="" />
                                </div>
                                <div className="Link">
                                    <Link to="/companyInfo"><h2>Student</h2></Link>
                                    <p>NextGen-Hire connects companies with fresh talent effortlessly. Businesses can easily share information about freshers, ensuring a good fit for their needs and fostering successful hires.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features">
                    <div className="feature-h2">
                        <h2>Feature Boxes</h2>
                    </div>
                    <div className="feature-p">
                        <p>A good design is not only aesthetically pleasing, but also functional</p> <p>It should be able to solve the problem </p>
                    </div>
                    <div className="main-box">
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <img src="./images/Vector.png" alt="" />
                            </div>
                            <div className="boxe-h3"><h3>Interview Management</h3></div>
                            <div className="box-p"><p> Tools for senior developers to schedule, conduct, and manage interviews seamlessly.</p></div>
                        </div>
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <img src="./images/Group 104.png" alt="" />
                            </div>
                            <div className="boxe-h3"><h3>Candidate Assessment:</h3></div>
                            <div className="box-p"><p>Tools for senior developers to schedule, conduct, and manage interviews seamlessly</p></div>
                        </div>
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <img src="./images/Group.png" alt="" />
                            </div>
                            <div className="boxe-h3"><h3>Company Profiles</h3></div>
                            <div className="box-p"><p>Tools for senior developers to schedule, conduct, and manage interviews seamlessly</p></div>
                        </div>
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <img src="./images/lap.png" alt="" />
                            </div>
                            <div className="boxe-h3"><h3>Skill Matching:</h3></div>
                            <div className="box-p"><p> Tools for senior developers to schedule, conduct, and manage interviews seamlessly.</p></div>
                        </div>

                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <img src="./images/Task.png" alt="" />
                            </div>
                            <div className="boxe-h3"><h3>Feedback System</h3></div>
                            <div className="box-p"><p> Tools for senior developers to schedule, conduct, and manage interviews seamlessly.</p></div>
                        </div>
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <img src="./images/sword.png" alt="" />
                            </div>
                            <div className="boxe-h3"><h3>Collaboration Tools</h3></div>
                            <div className="box-p"><p> Tools for senior developers to schedule, conduct, and manage interviews seamlessly.</p></div>
                        </div>
                    </div>
                    <div className="img-slider">
                        <div className="slider">
                            <video autoPlay loop muted playsInline style={{ width: '100%' }}>
                                <source src="./images/vid-slider.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="GetTouch">
                        <div className="global">
                            <img src="./images/Global.png" alt="" />
                        </div>
                        <div className="form">
                            <h2>Get in touch</h2>
                            <div className="form-para">
                                <p>Your feedback helps us improve. Let us know what we’re doing well and.</p> <p> where we can enhance your experience. </p></div>
                            <div className="input1">
                                <input type="email" placeholder='Enter your mail' />
                                <input type="text" placeholder='Name' />
                            </div>
                            <div className="input2">
                                <input type="text" placeholder='Feedback' />
                            </div>
                            <div className="form-btn">
                                <button>
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>

                    <footer style={{ backgroundColor: '#18181C', color: '#fff', padding: '20px', textAlign: 'center' }}>
                        <div className="footer-container">
                            <div className="about-us">
                                <h3>About Us</h3>
                                <p>NextGen-Hire connects companies with fresh talent. We ensure skilled candidates are referred by experienced developers.</p>
                            </div>

                            <div className="links">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="/Home"><p>Home</p></Link></li>
                                    <li><Link to="/about"><p>About Us</p></Link></li>
                                    <li><Link to="/services"><p>Services</p></Link></li>
                                    <li><Link to="/contact"><p>Contact </p></Link></li>
                                </ul>
                            </div>

                            <div className="contact-info">
                                <h3>Contact Information</h3>
                                <p>Email: info@nextgen-hire.com</p>
                                <p>Phone: +1 (234) 567-8901</p>
                            </div>


                            <div className="social-media">
                                <h3>Follow Us</h3>
                                <Link to="#" target="_blank"><p>LinkedIn</p></Link>
                                <Link to="#" target="_blank"><p>Twitter</p></Link>
                                <Link to="#" target="_blank"><p>Facebook</p></Link>
                            </div>


                        </div>

                        <div className="footer-bottom">
                            <p>&copy; 2024 NextGen-Hire. All rights reserved.</p>
                        </div>
                    </footer>

                </div>
            </div>


            <div>

            </div>
        </div>


    )
}

export default Home
