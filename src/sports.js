import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, withRouter } from 'react-router-dom';

function Sports() {

  useEffect(() => {
    fetchItemsSport();
  }, []);

  const [itemsSport, setItemsSport] = useState([]);

  const fetchItemsSport = async () => {
    const dataSport = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=sports&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsSport = await dataSport.json();
    const articlesSport = itemsSport.articles;
    console.log(articlesSport);
    //  console.log(items);
    setItemsSport(itemsSport);
  }

  return (
    <div className="items">
      {
        itemsSport.articles ?
          itemsSport.articles.map(article => {
            return <div className="itemSport" key={article.title}>
              <p className="source">{article.source.name}</p>
              <a href={article.url} target="_blank">
                <h3 className="sportTitle">{article.title}</h3>
                <img src={article.urlToImage} />
              </a>

            </div>
              ;
          }) : 'nece da radi nesto '}

    </div>
  );
}

export default Sports;
