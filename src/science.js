import React, { useState, useEffect } from 'react';
import './App.css';

function Science() {

  useEffect(() => {
    fetchItemsScience();
  }, []);

  const [itemsScience, setItemsScience]= useState([]);

  const fetchItemsScience = async () => {
    const dataScience = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=science&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsScience = await dataScience.json();
    const articlesScience = itemsScience.articles;
    console.log(articlesScience);

    setItemsScience(itemsScience);

  }

  return (
    <div className="items">
      {
        itemsScience.articles ?
          itemsScience.articles.map(article => {
            return <div className="itemSport" key={article.title}>
              <p className="source">{article.source.name}</p>
              <a href={article.url} target="_blank">
                <h3 className="sportTitle">{article.title}</h3>
                <img src={article.urlToImage} /></a>

            </div>
          }) : ''}

    </div>
  );
}

export default Science;