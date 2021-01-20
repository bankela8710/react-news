import React, { useState, useEffect } from 'react';
import Weather from './weather';
import './App.css';
import { Link } from 'react-router-dom';
import Modal from './modal';
import WidgetLead from './widgetLead';
import WidgetLeadSecond from './widgetLeadSecond';
import WidgetLeadAside from './widgetLeadAside';
import ClipLoader from "react-spinners/ClipLoader";
import WidgetLeadUl from './widgetLeadUl';
import WidgetLeadBottom from './widgetLeadBottom';




function Headlins() {
  
  useEffect(() => {
    fetchItemsHeadlins();
  }, []);

  const [itemsHeadlins, setItemsHeadlins] = useState([]);
  const [disableModal, setUserToStorage] = useState(true);
  const [loadSpinner, setLoadSpinner] = useState(true)


  const fetchItemsHeadlins = async () => {
    const dataHeadlins = await fetch('http://newsapi.org/v2/top-headlines?country=rs&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
    const itemsHeadlins = await dataHeadlins.json();
    const articlesHeadlins = itemsHeadlins.articles;
    // setuj storage sa article-ima
    //console.log('headlines provera', articlesHeadlins);

    if (articlesHeadlins !== undefined) {
      // console.log('imamo article')
      setLoadSpinner(false);
    } else {
      setLoadSpinner(true);
      // console.log('nemamo article uslov za spinner');

    }
    //  console.log(items);
    setItemsHeadlins(itemsHeadlins);
    checkIfUserExistInStorage();
  }



  const checkIfUserExistInStorage = () => {
    if (localStorage.getItem('userName') === 'Petar Petrovic') {
      console.log('pusti ga, imamo ga u storage');
      return setUserToStorage(true);
    } else {
      //console.log('nemamo ga, ide modal ide set storage-a');
      //localStorage.setItem('userName', 'Petar Petrovic');
      return setUserToStorage(false);

    }
  }

  const handleModalEvents = (event) => {
    const modalWrapper = document.querySelector('.modal-wrapper');
    console.log('modal event value', event.target.innerText)
    if (event.target.innerText === 'Ok') {
      localStorage.setItem('userName', 'Petar Petrovic');
      modalWrapper.classList.add('hide-modal');
    } else {
      // zatvoriti modal i ne snimamo user-a 
      modalWrapper.classList.add('hide-modal');
    }

  }

  return (
    loadSpinner ? <ClipLoader loading={loadSpinner} size={150} />
      :
      
      <section className="science headlins container-wrapper">
        <div className="sportArticlesWrapper">
          <div className="sectionOne">
            {
              itemsHeadlins.articles ?
                itemsHeadlins.articles.map((article, index) => {
                  if (index < 3) {
                    return (
                      <div className="sportArticle" key={index}>
                        <Link className="link" to={{ pathname: `/headlines/${article.title}`, article }}>
                          <WidgetLead imagePath={article?.urlToImage} name={article.source?.name} title={article?.title} />
                        </Link>
                      </div>
                    )
                  } else if (index >= 3 && index < 8) {
                   // console.log('od 4 do 8', article)
                  }
                }) : ''
            }
          </div>


          <div className="sectionTwo">
            <div className="">
              {
                itemsHeadlins.articles ?
                  itemsHeadlins.articles.map((article, index) => {
                    if (index >= 3 && index < 9) {
                      return (
                        <Link key={index}  className="link" to={{ pathname: `/headlines/${article.title}`, article }}>
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
                itemsHeadlins.articles ?
                  itemsHeadlins.articles?.map((article, index) => {
                    if (index >= 9 && index < 12) {
                      return (
                        <ul key={index}>
                          <Link  className="link" to={{ pathname: `/headlines/${article.title}`, article }}>
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
                itemsHeadlins.articles ?
                  itemsHeadlins.articles.map((article, index) => {
                    if (index >= 12 && index < 14) {
                      return (
                        <article key={index} className="widget-bottom-wrapper">
                          <Link className="link" to={{ pathname: `/headlines/${article.title}`, article }}>
                            <WidgetLeadBottom imagePath={article?.urlToImage} name={article.source?.name} title={article?.title} />
                          </Link>
                        </article>
                      )
                    } else {

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
              itemsHeadlins.articles ?
                itemsHeadlins.articles?.map((article, index) => {
                  if (index >= 14 && index < itemsHeadlins.articles.length) {
                    return (
                      <Link key={index} className="link" to={{ pathname: `/headlines/${article.title}`, article }}>
                        <WidgetLeadAside imagePath={article?.urlToImage} title={article?.title} />
                      </Link>
                    )
                  }
                }) : ""
            }
          </div>
        </div>
        {!disableModal ? <Modal handleModalClick={(event) => handleModalEvents(event)} /> : null}
      </section>
      
     
  );
}

export default Headlins;
