import React from 'react'
import CarouselComponent from '../components/CarouselComponent'
import TeamMember from './../assets/images/user1.jpg'
import GrowthImg from './../assets/images/growth1.jpg'
import FooterComponent from '../components/FooterComponent'
const Home = () => {
    return (
        <div>
            <CarouselComponent />
            <div className="container-fluid">
                {/* --- tag Line of Application-- */}
                <div className="row my-3">
                    <div className="col-12">
                        <h3 className='display-6 text-center'>Software development is the act of examining the <br />
                            artifacts and the behavior of the software
                        </h3>
                    </div>
                </div>
            </div>
            {/* --- Vision Mission and Amis Section---- */}
            <div className="row justify-content-evenly text-center mb-5">
                <div className="col-md-3">
                    <h1 className='text-primary '><i className="bi bi-file-code-fill"></i></h1>
                    <h5>Our Vision</h5>
                    <p>To be the leading platform for continuous skill development, helping individuals and professionals stay relevant, competitive, and future-ready.</p>
                </div>
                <div className="col-md-3">
                    <h1 className='text-danger'><i className="bi bi-bookmarks-fill"></i></h1>
                    <h5>Our Mission</h5>
                    <p>To empower learners through innovative and accessible online education, enabling them to take control of their learning journey and achieve their personal and professional goals.</p>
                </div>
                <div className="col-md-3">
                    <h1 className='text-success'><i className="bi bi-calendar-range-fill"></i></h1>
                    <h5>Our Aims</h5>
                    <p>To provide accessible, high-quality, and personalized education using innovative technology, enabling learners to grow academically and professionally.</p>
                </div>
            </div>
            {/* ------------------- Team Members ------------ */}
            <div className="row justify-content-evenly">
                <h3 className='text-center'>Our Team Members</h3>
                <div className="col-md-3 mt-3">
                    <div className="card">
                        <img src={TeamMember} className="img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Praveen</h5>
                            <p className="card-text">Some quick example text to build on the card title and.</p>
                            <a href="#" className="btn btn-primary">More Information</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card">
                        <img src={TeamMember} className="img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Vinay</h5>
                            <p className="card-text">Some quick example text to build on the card title and.</p>
                            <a href="#" className="btn btn-primary">More Information</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card">
                        <img src={TeamMember} className="img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 className="card-title">Tarun</h5>
                            <p className="card-text">Some quick example text to build on the card title and.</p>
                            <a href="#" className="btn btn-primary">More Information</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-evenly">
                <div className="col-md-3 mt-4">
                    <div className="card">
                        <img src={TeamMember} className="img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Shashank</h5>
                            <p className="card-text">Some quick example text to build on the card title and.</p>
                            <a href="#" className="btn btn-primary">More Information</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="card">
                        <img src={TeamMember} className="img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Srikanta</h5>
                            <p className="card-text">Some quick example text to build on the card title and.</p>
                            <a href="#" className="btn btn-primary">More Information</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-4">
                    <div className="card">
                        <img src={TeamMember} className="img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Keerthan</h5>
                            <p className="card-text">Some quick example text to build on the card title and.</p>
                            <a href="#" className="btn btn-primary">More Information</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------- Organization Growth--------- */}
            <div className="row justify-content-evenly mt-5">
                <h3 className='text-center'>Our Organization Growth</h3>
                <div className="col-md-5">
                    <img src={GrowthImg} className="img-thumbnail" alt="Growth Iamge" />
                </div>
                <div className="col-md-5">
                    <h5 className='pt-4'>Web Development</h5>
                    <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar text-bg-success" style={{width:'25%'}}>25%</div>
                    </div>
                    <h5 className='pt-4'>Software Development</h5>
                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar text-bg-info" style={{width:'50%'}}>50%</div>
                    </div>
                    <h5 className='pt-4'>Python Development</h5>
                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar text-bg-warning" style={{width:'75%'}}>75%</div>
                    </div>
                    <h5 className='pt-4'>Java Development</h5>
                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar text-bg-danger" style={{width:'100%'}}>100%</div>
                    </div>
                    <h5 className='pt-4'>React Development</h5>
                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar text-bg-info" style={{width:'50%'}}>50%</div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}

export default Home