import React, { useState, useEffect } from 'react';
import Weather from './weather';
import {Link} from 'react-router-dom';
import './App.css';

function Science() {

  useEffect(() => {
    fetchItemsScience();
  }, []);

  const [itemsScience, setItemsScience] = useState([]);

  const fetchItemsScience = async () => {
    const dataScience = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=science&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsScience = await dataScience.json();
    const articlesScience = itemsScience.articles;
    console.log(articlesScience);

    setItemsScience(itemsScience);

  }

  return (
    <section className="science">
      <div className="sportArticlesWrapper">
      <div className="sectionOne">
        {
          itemsScience.articles ?
            itemsScience.articles.map((article, index) => {
              if (index < 5) {
                return (
                  
                    <article key={index} className="sportArticle">
                      <Link className="link" to={{pathname:`/science/${article.title}`, article}}>
                      <div className="sportArticleWrapper">
                        <div className="sportArticleImage">
                          <img src={article.urlToImage} />
                        </div>
                        <div className="sportArticleDescription">
                          <p>{article.source.name}</p>
                          <h3>{article.title}</h3>
                        </div>
                      </div>
                      </Link>
                    </article>
                  
                )
              } else if (index >= 4 && index < 8) {
                console.log('od 4 do 8', article)
              }


            }) : ''

        }
        </div>
        <div className="sectionTwo">
          <div className="">
            {
              itemsScience.articles ?
                itemsScience.articles.map((article, index) => {
                  if (index >= 5 && index < 9) {
                    return (
                      <article className="">
                        <Link className="link" to={{pathname:`/science/${article.title}`, article}}>
                        <div className="health-wrapper">
                          <div className="health-image">
                            <img src={article.urlToImage} />
                          </div>
                          <div className="health-description">
                            <p>{article.source.name}</p>
                            <h3>{article.title}</h3>
                          </div>
                        </div>
                        </Link>
                      </article>
                    )
                  }
                }) : ""
            }
          </div>

        </div>

        <div className="sectionFour">
          <div>
            {
              itemsScience.articles ?
                itemsScience.articles?.map((article, index) => {
                  if (index >= 9 && index < 12) {
                    return (
                      <ul>
                        <Link className="link" to={{pathname:`/science/${article.title}`, article}}>
                        <li>{article.title}</li>
                        </Link>
                      </ul>

                    )
                  }
                }) : ""

            }
          </div>
        </div>
        <div className="sectionFive">
          <div>
            {
              itemsScience.articles ?
                itemsScience.articles.map((article, index) => {
                  if (index >= 12 && index < 14) {
                    return (
                      <article className="">
                        <Link className="link" to={{pathname:`/science/${article.title}`, article}}>
                        <div className="sectionFiveWrapper">
                          <div className="sectionFiveImage">
                            <img src={article.urlToImage} />
                          </div>
                          <div className="sectionFiveDescription">
                            <p>{article.source.name}</p>
                            <h3>{article.title}</h3>
                          </div>
                        </div>
                        </Link>
                      </article>
                    )
                  }
                }) : ""
            }
          </div>
        </div>
      </div>
      <div className="sportArticlesAside">
        <h3><Weather /></h3>
        <div className="sportArticlesAsideNews">
          <h3>Procitajte jos.....</h3>
          {
            itemsScience.articles ?
              itemsScience.articles?.map((article, index) => {
                if (index >= 14 && index < itemsScience.articles.length) {
                  return (
                    <Link className="link" to={{pathname:`/science/${article.title}`, article}}>
                    <div>
                      <div >
                        <img src={article.urlToImage} />
                      </div>
                      <ul>
                        <li>{article.title}</li>
                      </ul>
                    </div>
                  </Link>
                  )
                }
              }) : ""

          }
        </div>
      </div>
    </section>
  );
}

export default Science;