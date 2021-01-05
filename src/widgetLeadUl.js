import React from 'react';
import './App.css';


const WidgetLeadUl = (props,index) => {
    return (
        <ul key={index}>
            <li>{props.title}</li>
        </ul>
    )
}

export default WidgetLeadUl;