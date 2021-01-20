import React, { useState, useEffect } from 'react';
import Weather from './weather';
import { Link } from 'react-router-dom';
import './App.css';
import WidgetLead from './widgetLead';
import WidgetLeadSecond from './widgetLeadSecond';
import WidgetLeadAside from './widgetLeadAside';
import WidgetLeadUl from './widgetLeadUl';
import WidgetLeadBottom from './widgetLeadBottom';
import ClipLoader from "react-spinners/ClipLoader";

function Science() {

  useEffect(() => {
    fetchItemsScience();
  }, []);

  const [itemsScience, setItemsScience] = useState([]);
  const [loadSpinner, setLoadSpinner] = useState(true);

  const fetchItemsScience = async () => {
    const dataScience = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=science&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsScience = await dataScience.json();
    const articlesScience = itemsScience.articles;
    //console.log(articlesScience);
    if (articlesScience !== undefined) {
      // console.log('imamo article')
      setLoadSpinner(false);
    } else {
      setLoadSpinner(true);
      // console.log('nemamo article uslov za spinner');

    }
    setItemsScience(itemsScience);

  }

  return (
    loadSpinner ? <ClipLoader loading={loadSpinner} size={150} /> :
    <section className="science">
      <div className="sportArticlesWrapper">
        <div className="sectionOne">
          {
            itemsScience.articles ?
              itemsScience.articles.map((article, index) => {
                if (index < 5) {
                  return (
                    <div className="sportArticle" key={index}>
                      <Link className="link" to={{ pathname: `/science/${article.title}`, article }}>
                        <WidgetLead imagePath={article?.urlToImage} name={article.source?.name} title={article?.title} />
                      </Link>
                    </div>
                  )
                } else if (index >= 4 && index < 8) {
                 // console.log('od 4 do 8', article)
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
                      <Link key={index} className="link" to={{ pathname: `/science/${article.title}`, article }}>

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
              itemsScience.articles ?
                itemsScience.articles?.map((article, index) => {
                  if (index >= 9 && index < 12) {
                    return (
                      <ul key={index}>
                        <Link className="link" to={{ pathname: `/science/${article.title}`, article }}>
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
              itemsScience.articles ?
                itemsScience.articles.map((article, index) => {
                  if (index >= 12 && index < 14) {
                    return (
                      <article className="widget-bottom-wrapper" key={index}>
                      <Link className="link" to={{ pathname: `/science/${article.title}`, article }}>
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
        <div className="sportArticlesAsideNews">
          <h3>Procitajte jos.....</h3>
          {
            itemsScience.articles ?
              itemsScience.articles?.map((article, index) => {
                if (index >= 14 && index < itemsScience.articles.length) {
                  return (
                    <Link key={index} className="link" to={{ pathname: `/science/${article.title}`, article }}>
                      <WidgetLeadAside imagePath={article?.urlToImage} title={article?.title} />
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