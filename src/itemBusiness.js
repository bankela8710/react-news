import React from 'react';
import Weather from './weather';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './App.css';
import Business from './business';

function BusinessItem(props) {
    //console.log('proveri location da li je undefned', props.location)
    //console.log('article location', props.location?.article)
    const articleItem = props.location.article;

   // console.log(articleItem, 'this is article');
   if(articleItem === undefined){
    return   <Business />
   }
    
    return (
        <div className="single-item">
            <div className="single-item-content">
                <p className="single-item-source">{articleItem.source.name}</p>
                <h1>{articleItem.title}</h1>
                <div className="single-item-social">
                    <p>Podeli
                       <Link className="link-social" to="https://www.facebook.com/"><FaFacebook /> </Link>
                        <Link className="link-social" to="https://twitter.com"><FaTwitter /></Link>
                        <Link className="link-social" to="https://mail.google.com"><FaEnvelope /></Link>
                    </p>
                </div>
                <img src={articleItem.urlToImage} />
                <p>{articleItem.content}</p>
            </div>
            <div className="single-item-aside">
                <Weather />
            </div>
        </div>
    );
}


export default BusinessItem;
