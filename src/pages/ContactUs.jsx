import React from 'react'
import FooterComponent from '../components/FooterComponent'

const ContactUs = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-evenly py-5 my-5" style={{ backgroundColor: '#f1f1f1' }}>
                    <h5 className='text-center pb-3'>Contact Us</h5>
                    <div className="col-md-5">
                    <div class="mb-3">
                            <label for="fullName" className="form-label">Full Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                            <label for="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3" placeholder='Describe Yourself'></textarea>
                        </div>
                        <div>
                            <button className='btn btn-success me-2'>Submit</button>
                            <button className='btn btn-primary'>Reset</button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h5>Address</h5>
                        <p>
                            Praveen InfoTech
                            Attigupe Metro Station <br />
                            Vijayanagar 2nd Pahse <br />
                            Bangalore -560023 <br />
                            <i className="bi bi-telephone-outbound"></i>: +91 7624944345 <br />
                        </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0160464676574!2d77.53478887412031!3d12.970824914897236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ddddccc3acb%3A0x4ea472db769a21aa!2sVijayanagar%20Metro%20Railway%20Station!5e0!3m2!1sen!2sin!4v1744284911756!5m2!1sen!2sin" width="400" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        </div>
    )
}

export default ContactUs