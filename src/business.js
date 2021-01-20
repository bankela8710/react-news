import React, { useState, useEffect } from 'react';
import Weather from './weather';
import { Link } from 'react-router-dom';
import './App.css';
import WidgetLead from './widgetLead';
import WidgetLeadUl from './widgetLeadUl';
import ClipLoader from "react-spinners/ClipLoader";

function Business() {

  useEffect(() => {
    fetchItemsBusiness();
  }, []);

  const [itemsBusiness, setItemsBusiness] = useState([]);
  const [loadSpinner, setLoadSpinner] = useState(true);


  const fetchItemsBusiness = async () => {
    const dataBusiness = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=business&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsBusiness = await dataBusiness.json();
    const articlesBusiness = itemsBusiness.articles;
   // console.log(articlesBusiness);
   if (articlesBusiness !== undefined) {
    // console.log('imamo article')
    setLoadSpinner(false);
  } else {
    setLoadSpinner(true);
    // console.log('nemamo article uslov za spinner');
  }
    setItemsBusiness(itemsBusiness);

  }

  return (
    loadSpinner ? <ClipLoader loading={loadSpinner} size={150} /> :
    <section className="health">
      <div className="sportArticlesWrapper">
        {
          itemsBusiness.articles ?
            itemsBusiness.articles.map((article, index) => {
              if (index < 5) {
                return (
                  <div className="sportArticle" key={index}>
                  <Link className="link" to={{ pathname: `/business/${article.title}`, article }}>
                    <WidgetLead imagePath={article?.urlToImage} name={article.source?.name} title={article?.title} />
                  </Link>
                  </div>
                )
              } else if (index >= 4 && index < 8) {
              //  console.log('od 4 do 8', article)
              }
            }) : ''
        }


        <div className="sectionTwo">
          <div className="">
            {
              itemsBusiness.articles ?
                itemsBusiness.articles.map((article, index) => {
                  if (index >= 5 && index < 9) {
                    return (
                      <article key={index} className="">
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
                      <ul key={index}>
                        <Link className="link" to={{ pathname: `/business/${article.title}`, article }}>
                          <WidgetLeadUl title={article?.title} />
                        </Link>
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
                  if (index >= 12 && index < 14) {
                    return (
                      <article key={index} className="">
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
                  <ul key={index}>
                    <Link className="link" to={{ pathname: `/business/${article.title}`, article }} >
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