import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, withRouter } from 'react-router-dom';



function Headlins() {

  useEffect(() => {
    fetchItemsHeadlins();
  }, []);

  const [itemsHeadlins, setItemsHeadlins] = useState([]);

  const fetchItemsHeadlins = async () => {
    const dataHeadlins = await fetch('http://newsapi.org/v2/top-headlines?country=rs&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsHeadlins = await dataHeadlins.json();
    const articlesHeadlins = itemsHeadlins.articles;
    console.log(articlesHeadlins);
   
    //  console.log(items);
    setItemsHeadlins(itemsHeadlins);
  }

  return (
    <div>
      <h1 className="title">TOP VESTI</h1>
    <div className="items">
      {
        itemsHeadlins.articles ?
          itemsHeadlins.articles.map(article => {
            return <div className="itemSport" key={article.title}>
              <p className="source">{article.source.name}</p>
              <a href={article.url} target="_blank">
                <h3 className="sportTitle">{article.title}</h3>
                <img src={article.urlToImage} /></a>

            </div>
              ;
          }) : ''}

    </div>
    </div>
  );
}

export default Headlins;
