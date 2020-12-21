import React, { useState, useEffect } from 'react';
import Weather from './weather';
import {Link} from 'react-router-dom';
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
      <section className="health">
      <div className="sportArticlesWrapper">
        {
          itemsBusiness.articles ?
          itemsBusiness.articles.map((article, index) => {
              if (index < 5) {
                return (
                  <article key={index} className="sportArticle">
                   <Link className="link" to={{pathname:`/business/${article.title}`, article}}>
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
              itemsBusiness.articles ?
              itemsBusiness.articles.map((article, index) => {
                  if (index >=5 && index < 9) {
                    return (
                      <article className="">
                       
                      <div className="health-wrapper">
                        <div className="health-image">
                          <img src={article.urlToImage} />
                        </div>
                        <div className="health-description">
                          <p>{article.source.name}</p>
                          <h3>{article.title}</h3>
                        </div>
                      </div>
                    
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
              itemsBusiness.articles ?
              itemsBusiness.articles?.map((article, index) => {
                  if (index >= 9 && index < 12) {
                    return (
                      <ul>
                        
                        <li>{article.title}</li>
                        
                      </ul>

                    )
                  }
                }) : ""

            }
          </div>
        </div>
        <div className="sectionTwo">
          <div className="">
            {
              itemsBusiness.articles ?
              itemsBusiness.articles.map((article, index) => {
                  if (index >=12 && index < 14) {
                    return (
                      <article className="">
                        
                      <div className="health-wrapper">
                        <div className="health-image">
                          <img src={article.urlToImage} />
                        </div>
                        <div className="health-description">
                          <p>{article.source.name}</p>
                          <h3>{article.title}</h3>
                        </div>
                      </div>
                     
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
      
        {
          itemsBusiness.articles ?
          itemsBusiness.articles?.map((article, index) => {
              if (index >= 14 && index < itemsBusiness.articles.length) {
                return (
                  <ul>
                    <Link className="link" to={{pathname:`/technology/${article.title}`, article }} >
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


export default Business;