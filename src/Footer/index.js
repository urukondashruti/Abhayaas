// Import necessary dependencies and styles
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faGoogle, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import brand icons from FontAwesome
import Callback from "../Callback"; // Import Callback component
import './index.css'; // Import CSS file for styling

// Footer component
const Footer = () => {
    return (
        <div className="footer-container"> {/* Container for the footer */}
            <div className="footer-content"> {/* Content of the footer */}
                <div className="row"> {/* Bootstrap row */}
                    <div className="col-12 col-md-6 text-center"> {/* First column with logo and social icons */}
                        <h1>KARO ABHAYAAS</h1> {/* Brand name */}
                        <div className="social-icons"> {/* Container for social icons */}
                            {/* Social media icons */}
                            <FontAwesomeIcon icon={faGoogle} className="marginright"/>
                            <FontAwesomeIcon icon={faFacebook} className="marginright"/>
                            <FontAwesomeIcon icon={faInstagram} className="marginright"/>
                            <FontAwesomeIcon icon={faTwitter} className="marginright"/>
                        </div>
                        <p className="footer-text">KARO ABHAYAAS <br/> {/* Footer text */}
                        112, ELECTRONIC CITY<br/> {/* Address */}
                        BANGALORE, INDIA</p>
                    </div>
                    <div className="col-6 para"> {/* Second column with 'Get to know us' links */}
                        <h1>Get to know us</h1>
                        <p>About us</p>
                        <p>Career</p>
                        <p>Press Releases</p>
                        <p>Gift a smile</p>
                    </div>
                    <div className="col-6 para"> {/* Third column with callback component */}
                        <Callback/>
                    </div>
                    <div className="col-12 col-md-6 para"> {/* Fourth column with 'Let Us help you' links */}
                        <h1>Let Us help you</h1>
                        <p>100% Purchase</p>
                        <p>Protection</p>
                        <p>Your Account</p>
                        <p>Help</p>
                    </div>
                    <div className="col-12"> {/* Divider line */}
                        <hr className="footer-line" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer; // Export the Footer component
