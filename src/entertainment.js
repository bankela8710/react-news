import React, { useState, useEffect } from 'react';
import './App.css';

function Entertainment() {

  useEffect(() => {
    fetchItemsEntertainment();
  }, []);

  const [itemsEntertainment, setItemsEntertainment] = useState([]);

  const fetchItemsEntertainment = async () => {
    const dataEntertainment = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=entertainment&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsEntertainment = await dataEntertainment.json();
    const articlesEntertainment = itemsEntertainment.articles;

    console.log(articlesEntertainment);
    setItemsEntertainment(itemsEntertainment);

  }
  return (
    <div className="items">
      {
        itemsEntertainment.articles ?
          itemsEntertainment.articles.map(article => {
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

export default Entertainment;