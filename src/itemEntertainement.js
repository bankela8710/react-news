import React  from 'react';
import Weather from './weather';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';
import {Link} from 'react-router-dom';

import './App.css';
import Entertainment from './entertainment';

function EntertainmentItem(props) {

    const article = props.location.article;
   // console.log(article, 'this is article');
   if(article === undefined){
    return   <Entertainment />
   }
    return (
       
        <div className="single-item">
        <div className="single-item-content">
            <p className="single-item-source">{article.source.name}</p>
            <h1>{article.title}</h1>
            <div className="single-item-social">
                <p>Podeli
                   <Link className="link-social" to="https://www.facebook.com/"><FaFacebook /> </Link>
                    <Link className="link-social" to="https://twitter.com"><FaTwitter /></Link>
                    <Link className="link-social" to="https://mail.google.com"><FaEnvelope /></Link>
                </p>
            </div>
            <img src={article.urlToImage} />
            <p>{article.content}</p>
        </div>
        <div className="single-item-aside">
            <Weather />
        </div>
    </div>
    );
}


export default EntertainmentItem;
