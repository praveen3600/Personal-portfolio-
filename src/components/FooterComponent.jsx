import React from 'react'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
  return (
    <div>
        <div className="row justify-content-evenly bg-dark pb-4">
            <div className="col-md-3">
                <h5 className='text-white'>Praveen InfoTech</h5>
                <p className='text-white'>"Life is full of challenges, yet we move forward, refusing to be defeated by the obstacles that try to hold us back."</p>
            </div>
            <div className="col-md-3">
            <h5 className='text-white'>Important Links</h5>
            <Link to={'/'} className='text-white text-decoration-none'>Home</Link> <br/>
            <Link to={'/services'} className='text-white text-decoration-none'>Services</Link> <br/>
            <Link to={'/contact'} className='text-white text-decoration-none'>Contact Us</Link> <br/>
            <Link to={'/about'} className='text-white text-decoration-none'>About Us</Link> <br/>
            </div>
            <div className="col-md-3">
            <h5 className='text-white'>Address</h5>
            <p className='text-white'>
            Praveen InfoTech
            Attigupe Metro Station <br/>
            Vijayanagar 2nd Pahse <br/>
            Bangalore -560023 <br/>
            <i className="bi bi-telephone-outbound"></i>: +91 7624944345 <br/>
            </p>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent