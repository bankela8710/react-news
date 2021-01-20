import React, { useState, useEffect } from 'react';
import Weather from './weather';
import { Link } from 'react-router-dom';
import './App.css';
import WidgetLead from './widgetLead';
import WidgetLeadSecond from './widgetLeadSecond';
import WidgetLeadUl from './widgetLeadUl';
import ClipLoader from "react-spinners/ClipLoader";

function Technology() {

  useEffect(() => {
    fetchItemsTechnology();
  }, []);

  const [itemsTechnology, setItemsTechnology] = useState([]);
  const [loadSpinner, setLoadSpinner] = useState(true);


  const fetchItemsTechnology = async () => {
    const dataTechnology = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=technology&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsTechnology = await dataTechnology.json();
    const articlesTechnology = itemsTechnology.articles;
    // console.log(articlesTechnology);
    if (articlesTechnology !== undefined) {
      // console.log('imamo article')
      setLoadSpinner(false);
    } else {
      setLoadSpinner(true);
      // console.log('nemamo article uslov za spinner');

    }
    setItemsTechnology(itemsTechnology);

  }

  return (
    loadSpinner ? <ClipLoader loading={loadSpinner} size={150} /> :
      <section className="health">
        <div className="sportArticlesWrapper">
          {
            itemsTechnology.articles ?
              itemsTechnology.articles.map((article, index) => {
                if (index < 5) {
                  return (
                    <div className="sportArticle" key={index}>
                      <Link className="link" to={{ pathname: `/technology/${article.title}`, article }} >
                        <WidgetLead imagePath={article?.urlToImage} name={article.source?.name} title={article?.title} />
                      </Link>
                    </div>
                  )
                } else if (index >= 4 && index < 8) {
                  //console.log('od 4 do 8', article)
                }
              }) : ''
          }


          <div className="sectionTwo">
            <div className="">
              {
                itemsTechnology.articles ?
                  itemsTechnology.articles.map((article, index) => {
                    if (index >= 5 && index < 9) {
                      return (
                        <Link key={index} className="link" to={{ pathname: `/technology/${article.title}`, article }} >
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
                itemsTechnology.articles ?
                  itemsTechnology.articles?.map((article, index) => {
                    if (index >= 9 && index < 12) {
                      return (
                        <ul key={index}>
                          <Link className="link" to={{ pathname: `/technology/${article.title}`, article }}>
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
                itemsTechnology.articles ?
                  itemsTechnology.articles.map((article, index) => {
                    if (index >= 12 && index < 14) {
                      return (
                        <Link key={index} className="link" to={{ pathname: `/technology/${article.title}`, article }} >
                          <WidgetLeadSecond imagePath={article?.urlToImage} name={article.source?.name} title={article?.title} />
                        </Link>
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
            itemsTechnology.articles ?
              itemsTechnology.articles?.map((article, index) => {
                if (index >= 14 && index < itemsTechnology.articles.length) {
                  return (
                    <ul key={index}>
                      <Link className="link" to={{ pathname: `/technology/${article.title}`, article }}>
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


export default Technology;
