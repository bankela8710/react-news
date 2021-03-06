import React, { useState, useEffect } from 'react';
import Weather from './weather';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import PortalLinks from './portalLink';
import WidgetLead from './widgetLead';
import WidgetLeadSecond from './widgetLeadSecond';
import WidgetLeadUl from './widgetLeadUl';
import WidgetLeadBottom from './widgetLeadBottom';
import ClipLoader from "react-spinners/ClipLoader";


//let articlesHealthHome = [];

function Health() {

  useEffect(() => {
    fetchItemsHealth();
  }, []);

  const [itemsHealth, setItemsHealth] = useState([]);
  const [loadSpinner, setLoadSpinner] = useState(true);

  const fetchItemsHealth = async () => {
    const dataHealth = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=health&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsHealth = await dataHealth.json();
    const articlesHealth = itemsHealth.articles;
    //console.log(articlesHealth);
    //articlesHealthHome = articlesHealth.splice(0,5);
    //console.log(articlesHealthHome);
    //  console.log(items);
    if (articlesHealth !== undefined) {
      // console.log('imamo article')
      setLoadSpinner(false);
    } else {
      setLoadSpinner(true);
      // console.log('nemamo article uslov za spinner');

    }
    setItemsHealth(itemsHealth);
  }

  return (
    loadSpinner ? <ClipLoader loading={loadSpinner} size={150} /> :
    <section className="health">
      <div className="sportArticlesWrapper">
        {
          itemsHealth.articles ?
            itemsHealth.articles.map((article, index) => {
              if (index < 5) {
                return (
                  <div className="sportArticle" key={index}>
                    <Link className="link" to={{ pathname: `/health/${article.title}`, article }}>
                      <WidgetLead imagePath={article?.urlToImage} name={article.source?.name} title={article?.title} />
                    </Link>
                  </div>
                )
              } else if (index >= 4 && index < 8) {
               // console.log('od 4 do 8', article)
              }
            }) : ''
        }


        <div className="sectionTwo">
          <div className="">
            {
              itemsHealth.articles ?
                itemsHealth.articles.map((article, index) => {
                  if (index >= 5 && index < 9) {
                    return (
                      <Link key={index} className="link" to={{ pathname: `/health/${article.title}`, article }}>
                        <WidgetLeadSecond imagePath={article?.urlToImage} name={article.source?.name} title={article?.title} />
                      </Link>
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
                      <ul key={index}>
                        <Link className="link" to={{ pathname: `/health/${article.title}`, article }}>
                          <WidgetLeadUl title={article?.title} />
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
                  if (index >= 12 && index < 14) {
                    return (
                      <article className="widget-bottom-wrapper" key={index}>
                      <Link className="link" to={{ pathname: `/health/${article.title}`, article }}>
                        <WidgetLeadBottom imagePath={article?.urlToImage} name={article.source?.name} title={article?.title} />
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
                  <ul key={index}>
                    <Link className="link" to={{ pathname: `/health/${article.title}`, article }}>
                      <WidgetLeadUl title={article?.title} />
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
