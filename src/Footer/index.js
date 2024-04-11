import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Callback from "../Callback";
import './index.css'; // Import CSS file for styling

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="row">
                    <div className="col-12 col-md-6 text-center">
                        <h1>KARO ABHAYAAS</h1>
                        <div className="social-icons">
                            <FontAwesomeIcon icon={faGoogle} className="marginright"/>
                            <FontAwesomeIcon icon={faFacebook} className="marginright"/>
                            <FontAwesomeIcon icon={faInstagram} className="marginright"/>
                            <FontAwesomeIcon icon={faTwitter} className="marginright"/>
                        </div>
                        <p className="footer-text">KARO ABHAYAAS <br/>
                        112, ELECTRONIC CITY<br/>
                        BANGALORE, INDIA</p>
                    </div>
                    <div className="col-6 para">
                        <h1>Get to know us</h1>
                        <p>About us</p>
                        <p>Career</p>
                        <p>Press Releases</p>
                        <p>Gift a smile</p>
                    </div>
                    <div className="col-6 para">
                        <Callback/>
                    </div>
                    <div className="col-12 col-md-6 para">
                        <h1>Let Us help you</h1>
                        <p>100% Purchase</p>
                        <p>Protection</p>
                        <p>Your Account</p>
                        <p>Help</p>
                    </div>
                    <div className="col-12">
                        <hr className="footer-line" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
