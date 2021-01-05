import React from 'react';
import './App.css';


const WidgetLeadAside = (props,index) => {
    return (
        <div key={index}>
            <div >
                <img src={props.imagePath} />
            </div>
            <ul>
                <li>{props.title}</li>
            </ul>
        </div>
    )
}

export default WidgetLeadAside;