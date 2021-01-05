import React from 'react';
import './App.css';


const WidgetLeadBottom = (props,index) => {
    return (
        <article key={index} className="">
            <div className="sectionFiveWrapper">
                <div className="sectionFiveImage">
                    <img src={props.imagePath} />
                </div>
                <div className="sectionFiveDescription">
                    <p>{props.name}</p>
                    <h3>{props.title}</h3>
                </div>
            </div>

        </article>
    )
}


export default WidgetLeadBottom;