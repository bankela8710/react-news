import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, withRouter } from 'react-router-dom';

function Health() {

  useEffect(() => {
    fetchItemsHealth();
  }, []);

  const [itemsHealth, setItemsHealth] = useState([]);

  const fetchItemsHealth = async () => {
    const dataHealth = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=health&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsHealth = await dataHealth.json();
    const articlesHealth = itemsHealth.articles;
    console.log(articlesHealth);
    //  console.log(items);
    setItemsHealth(itemsHealth);
  }

  return (
    <div className="items">
      {
        itemsHealth.articles ?
          itemsHealth.articles.map(article => {
            return <div className="itemSport" key={article.title}>
              <p className="source">{article.source.name}</p>
              <a href={article.url} target="_blank">
                <h3 className="sportTitle">{article.title}</h3>
                <img src={article.urlToImage} /></a>

            </div>
              ;
          }) : ''}

    </div>
  );
}

export default Health;
