import React from 'react';
import './App.css';
import {FaFacebook} from 'react-icons/fa';
import  {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';


function Footer() {
    return (
    <div className="footer">
        <div className="footer-icons">
            <h3>Pratite nas na:</h3>
       <FaFacebook />
       <FaTwitter />
       <FaInstagram />
       <FaYoutube />
       </div>
    </div>
    )
}

export default Footer;