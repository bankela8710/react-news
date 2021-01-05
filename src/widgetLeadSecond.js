import React from 'react';
import './App.css';


const WidgetLeadSecond = (props,index)=>{
    return(
        <article key={index} className="">
        <div className="health-wrapper">
          <div className="health-image">
            <img src={props.imagePath} />
          </div>
          <div className="health-description">
            <p>{props.name}</p>
            <h3>{props.title}</h3>
          </div>
        </div>
      </article>
    )
}

export default WidgetLeadSecond;