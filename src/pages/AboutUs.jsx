import React from 'react'

import StaffImg from './../assets/images/staff.jpg'
import FooterComponent from '../components/FooterComponent'
const AboutUs = () => {
  return (
    <div>
        <div className="container-fluid">
            <div className="row justify-content-evenly mt-5">
                <h5 className='text-center'>About Us</h5>
                <div className="col-md-5 mb-4 mt-3">
                    <img src={StaffImg} className="img-thumbnail" alt="Growth Iamge" />
                </div>
                <div className="col-md-5 mb-4 mt-3">
                    <p style={{textAlign:'justify'}}>
                    At Praveen InfoTech, we believe that technology is more than just a tool — it's the gateway to opportunity, innovation, and transformation. Our mission is to empower learners of all backgrounds with the skills and confidence to thrive in today’s fast-paced digital world.

We offer high-quality, hands-on training in the latest technologies, from programming and web development to AI, data science, cloud computing, and beyond. Whether you're a beginner taking your first step or a professional looking to upgrade your skills, we’re here to guide your journey with expert-led courses, real-world projects, and personalized support.

What sets us apart is our commitment to practical learning, industry-relevant content, and a community-driven approach. Our team of passionate educators, developers, and mentors work together to create an environment where learning is engaging, accessible, and truly impactful.

Join us — and unlock your potential through the power of technology.
                    </p>
                    <button type="button" className="btn btn-outline-danger">Explore More</button>
                </div>
            </div>
            <FooterComponent/>
        </div>
    </div>
  )
}

export default AboutUs