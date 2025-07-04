import React from 'react'
import Service1Img from '../assets/images/service1.jpg'
import Service2Img from '../assets/images/service2.jpg'
import Service3Img from '../assets/images/service3.jpg'
import Service4Img from '../assets/images/service4.jpg'
import Service5Img from '../assets/images/service5.jpg'
import Service6Img from '../assets/images/service6.jpg'
import FooterComponent from '../components/FooterComponent'
const Services = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-evenly mt-5 ">
                    <h5 className='text-center'>Our Services</h5>
                    <div className="row justify-content-evenly"></div>
                    <div className="col-md-3 mt-4">
                        <div className="card">
                            <img src={Service1Img} className="img-fluid" alt="Service1 Image" />
                            <div className="card-body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">Master the art of building websites and web apps from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and more — all through hands-on projects and real-world guidance. Build your portfolio, gain in-demand skills, and launch your career in tech.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                    <div className="card">
                            <img src={Service2Img} className="img-fluid" alt="Service2 Image" />
                            <div className="card-body">
                                <h5 className="card-title">Software Testing</h5>
                                <p className="card-text">Learn to ensure software quality with industry-standard testing tools and techniques. Master manual and automation testing, work on real-world projects, and build the skills needed to become a quality assurance professional.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                    <div className="card">
                            <img src={Service3Img} className="img-fluid" alt="Service3 Image" />
                            <div className="card-body">
                                <h5 className="card-title">AWS</h5>
                                <p className="card-text">Get hands-on with Amazon Web Services and master cloud computing essentials. Learn to deploy, manage, and scale applications using key AWS tools and services — and prepare for in-demand certifications with real-world projects.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-evenly mt-5 mb-5">
                    <div className="col-md-3 mt-4">
                        <div className="card">
                            <img src={Service4Img} className="img-fluid" alt="Service4 Image" />
                            <div className="card-body">
                                <h5 className="card-title">Python-Fullstack</h5>
                                <p className="card-text">The Python Full Stack Development course teaches you to build complete web applications using frontend tools like HTML, CSS, JavaScript, and React, along with backend frameworks like Flask or Django. You'll also learn database integration, API development, and deployment—equipping you with real-world skills for a career in web development.
</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                    <div className="card">
                            <img src={Service5Img} className="img-fluid" alt="Service5 Image" />
                            <div className="card-body">
                                <h5 className="card-title">Java-Fullstack</h5>
                                <p className="card-text">Master full-stack development with Java. Build powerful web applications using Spring Boot, Hibernate, HTML, CSS, JavaScript, and modern frontend technologies — all through hands-on projects and practical skills.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                    <div className="card">
                            <img src={Service6Img} className="img-fluid" alt="Service6 Image" />
                            <div className="card-body">
                                <h5 className="card-title">Data Analyst</h5>
                                <p className="card-text">Transform data into insights with hands-on training in data cleaning, visualization, and analysis. Learn to use tools like Excel, SQL, Python, and Tableau to uncover trends and make data-driven decisions — preparing you for a career in data analytics.

</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default Services