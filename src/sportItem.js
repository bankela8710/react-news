import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function ItemSportSingle() {

useEffect(()=>{
fetchItemSport();
},[]);

    const [itemSport, setItemSport] = useState({});

    const fetchItemSport = async () => {
        const fetchItemSport = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=sports&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c')
        const itemSport = await fetchItemSport.json();
        console.log(itemSport);
    }
    return (
        <div >
            <h1 className="titleSingle">Sport Item</h1>
        </div>
    );
}

export default ItemSportSingle;
