import React, { useState, useEffect } from 'react';
import Weather from './weather';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import PortalLinks from './portalLink';


//let articlesHealthHome = [];

function Health() {

  useEffect(() => {
    fetchItemsHealth();
  }, []);

  const [itemsHealth, setItemsHealth] = useState([]);

  const fetchItemsHealth = async () => {
    const dataHealth = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=health&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsHealth = await dataHealth.json();
    const articlesHealth = itemsHealth.articles;
    //console.log(articlesHealth);
    //articlesHealthHome = articlesHealth.splice(0,5);
    //console.log(articlesHealthHome);
    //  console.log(items);
    setItemsHealth(itemsHealth);
  }

  return (
    <section className="health">
      <div className="sportArticlesWrapper">
        {
          itemsHealth.articles ?
            itemsHealth.articles.map((article, index) => {
              if (index < 5) {
                return (
                  <article className="sportArticle">
                    <Link className="link" to={{pathname:`/health/${article.title}`, article}}>
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
        <div className="sectionTwo">
          <div className="">
            {
              itemsHealth.articles ?
                itemsHealth.articles.map((article, index) => {
                  if (index >=5 && index < 9) {
                    return (
                      <article className="">
                        <Link className="link" to={{pathname:`/health/${article.title}`, article}}>
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
              itemsHealth.articles ?
                itemsHealth.articles?.map((article, index) => {
                  if (index >= 9 && index < 12) {
                    return (
                      <ul>
                        <Link className="link" to={{pathname:`/health/${article.title}`, article}}>
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
              itemsHealth.articles ?
                itemsHealth.articles.map((article, index) => {
                  if (index >= 12 && index <14 ) {
                    return (
                      <article className="">
                        <Link className="link" to={{pathname:`/health/${article.title}`, article}}>
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
        <h3>Procitajte jos.....</h3>
        {
          itemsHealth.articles ?
            itemsHealth.articles?.map((article, index) => {
              if (index >= 14 && index < itemsHealth.articles.length) {
                return (
                  <ul>
                    <Link className="link" to={{pathname:`/health/${article.title}`, article}}>
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

export default Health;
