import React  from 'react';
import Weather from './weather';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';
import {Link} from 'react-router-dom';

import './App.css';
import Sports from './sports';

function SportItem(props) {

    const articleSport = props.location.article;
   // console.log(articleSport, 'this is article');

   if(articleSport === undefined){
    return   <Sports />
   }
    return (
       
        <div className="single-item">
        <div className="single-item-content">
            <p className="single-item-source">{articleSport.source.name}</p>
            <h1>{articleSport.title}</h1>
            <div className="single-item-social">
                <p>Podeli
                   <Link className="link-social" to="https://www.facebook.com/"><FaFacebook /> </Link>
                    <Link className="link-social" to="https://twitter.com"><FaTwitter /></Link>
                    <Link className="link-social" to="https://mail.google.com"><FaEnvelope /></Link>
                </p>
            </div>
            <img src={articleSport.urlToImage} />
            <p>{articleSport.content}</p>
        </div>
        <div className="single-item-aside">
            <Weather />
        </div>
    </div>
    );
}


export default SportItem;
