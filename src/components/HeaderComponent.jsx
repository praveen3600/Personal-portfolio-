import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fs-3 fw-bolder" href="#">Praveen InfoTech</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active text-white" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/services'} className="nav-link active text-white" aria-current="page" href="#">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/about'} className="nav-link active text-white" aria-current="page" href="#">About Us</Link>
                            </li>  
                            <li className="nav-item">
                                <Link to={'/contact'} className="nav-link active text-white" aria-current="page" href="#">Contact Us</Link>
                            </li>
                        
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderComponent