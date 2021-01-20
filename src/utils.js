import React from 'react';
import './App.css';

 function GetCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let day = newDate.getDay();
    let weekDays = ['nedelja','ponedeljak','utorak','sreda','cetvrtak','petak','subota'];
    
    //console.log(weekDays, 'dan koji je')
    
    return <div className="current-date">{`${weekDays[day]}${" "}${date}/${month<10?`0${month}`:`${month}`}/${year} `}</div>
    }
  //  console.log(GetCurrentDate,);

    export default GetCurrentDate;

    