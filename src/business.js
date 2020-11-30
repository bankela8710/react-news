import React, { useState, useEffect } from 'react';
import './App.css';

function Business() {

    useEffect(() => {
        fetchItemsBusiness();
      }, []);

const [ itemsBusiness, setItemsBusiness]= useState([]);


    const fetchItemsBusiness = async () => {
        const dataBusiness = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=business&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
        const itemsBusiness = await dataBusiness.json();
        const articlesBusiness = itemsBusiness.articles;

        console.log(articlesBusiness);
        setItemsBusiness(itemsBusiness);

    }

    return (
        <div>
             <h1 className="title">Biznis</h1>
        <div className="items">
          {
            itemsBusiness.articles ?
            itemsBusiness.articles.map(article => {
                return <div className="itemSport" key={article.title}>
                  <p className="source">{article.source.name}</p>
                  <a href={article.url} target="_blank">
                    <h3 className="sportTitle">{article.title}</h3>
                    <img src={article.urlToImage} /></a>
    
                </div>
              }) : ''}
    
        </div>
        </div>
      );
}


export default Business;