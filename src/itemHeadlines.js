import React, {useEffect, useState} from 'react';
import Weather from './weather';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import Headlines from './headlines';

import './App.css';

function HeadlinesItem(props) {
    //console.log('proveri location da li je undefned', props.location)
    //console.log('article location', props.location?.article)
   // console.log(props,' props')
    const articleItem = props.location.article;
//console.log(articleItem, 'imamo article');
     const [loadSpinner, setLoadSpinner] = useState(false)

//console.log(loadSpinner,'spiner')
    if(articleItem === undefined){
     return   <Headlines />
    }
    //   if (articleItem !== undefined) {
    //       console.log('imamo article')
    //       setLoadSpinner(false);
    //   }
    //    } else {
    //        console.log('nemamo artikle')
    //      setLoadSpinner(true);
    //      // console.log('nemamo article uslov za spinner');
  
    //    }

    //console.log(articleItem, 'this is article');
    
    return (
        loadSpinner ? <ClipLoader loading={loadSpinner} size={150} />
       :
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


export default HeadlinesItem;
