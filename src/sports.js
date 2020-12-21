import React, { useState, useEffect } from 'react';
import Weather from './weather';
import './App.css';
import { Link } from 'react-router-dom';

let articlesSportHome = [];

function Sports() {

  useEffect(() => {
    fetchItemsSport();
  }, []);

  const [itemsSport, setItemsSport] = useState([]);

  const fetchItemsSport = async () => {
    const dataSport = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=sports&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsSport = await dataSport.json();
    const articlesSport = itemsSport.articles;
    articlesSportHome = articlesSport.slice(0, 5);
    console.log(articlesSportHome);
    //console.log(articlesSport);
    //  console.log(items);
    setItemsSport(itemsSport);
  }

  return (
    <section className="sport" >
      <div className="sportArticlesWrapper">
        <div className="sectionOne">
        {
          itemsSport.articles ?
            itemsSport.articles.map((article, index) => {
              console.log(article)
              if (index < 3) {
                return (
                  <article className="sportArticle">
                    <Link className="link" to={{pathname:`/sport/${article.title}`, article }}>
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
          <div className="sportArticlesWrapperOneAside">
            {
              itemsSport.articles ?
                itemsSport.articles.map((article, index) => {
                  if (index >= 3 && index < 6) {
                    return (
                      <ul>
                        <Link className="link" to={{pathname:`/sport/${article.title}`, article }}>
                        <li>{article.title}</li>
                        </Link>
                      </ul>
                    )
                  }
                }) : ""
            }
          </div>
          <div className="sportArticlesWrapperOne">
            {
              itemsSport.articles ?
                itemsSport.articles.map((article, index) => {
                  if (index == 6) {
                    return (
                      <article className="sportArticle">
                        <Link className="link" to={{pathname:`/sport/${article.title}`, article }}>
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
                  }
                }) : ""
            }
          </div>
        </div>
        <div className="sectionThree">
          {
            itemsSport.articles ?
              itemsSport.articles.map((article, index) => {
                if (index > 6 && index <= 8) {
                  return (
                    <article className="sportArticle">
                      <Link className="link" to={{pathname:`/sport/${article.title}`, article }}>
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
                }
              }) : ""
          }
        </div>
        <div className="sectionFour">
          <div>
            {
              itemsSport.articles ?
                itemsSport.articles?.map((article, index) => {
                  if (index > 8 && index <= 11) {
                    return (
                      <ul>
                        <Link className="link" to={{pathname:`/sport/${article.title}`, article }}>
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
              itemsSport.articles ?
                itemsSport.articles.map((article, index) => {
                  if (index > 16 && index <itemsSport.articles.length) {
                    return (
                      <article className="sportArticle">
                        <Link className="link" to={{pathname:`/sport/${article.title}`, article }}>
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
                  }
                }) : ""
            }
          </div>
        </div>
      </div>
      <div className="sportArticlesAside">
          <h3><Weather /></h3>
          <h3 className="aside-more-tittle">Jos vesti...</h3>
        {
          itemsSport.articles ?
            itemsSport.articles?.map((article, index) => {
              if (index > 11 && index <= 16) {
                return (
                  <ul>
                    <Link className="link" to={{pathname:`/sport/${article.title}`, article }}>
                    <li>{article.title}</li>
                    </Link>
                  </ul>

                )
              }
            }) : ""

        }
      </div>


    </section>

  );
}

export default Sports;
