import React from 'react';
import './App.css';



const WidgetLead = (props) => {
  return (
    <article className="sportArticle">
      <div className="sportArticleWrapper">
        <div className="sportArticleImage">
          <img src={props.imagePath} />
        </div>
        <div className="sportArticleDescription">
          <p>{props.name}</p>
          <h3>{props.title}</h3>
        </div>
      </div>
    </article>);
}


export default WidgetLead;