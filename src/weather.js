import React, { useState, useEffect } from 'react';
import './App.css';

const apiKeyWeather = '001c5a286fb2252c322a7d779e228af4';

function Weather() {

    useEffect(() => {
        cityId.map((item, index) => {
            return fetchWeather(index)
        })
        //fetchWeather();
    }, []);

    const cityId = [792680];
    //console.log(cityId[0])
    const [itemsWeather, setItemsWeather] = useState([]);

    let we = "";
    let weeee = "";
    const fetchWeather = async () => {
        const dataWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId[0]}&appid=001c5a286fb2252c322a7d779e228af4`)

        //const dataWeather = await fetch('https://api.openweathermap.org/data/2.5/weather?id=3197622&appid=001c5a286fb2252c322a7d779e228af4');
       // console.log(dataWeather, 'data response');
        const itemsWeather = await dataWeather.json();
        //console.log(itemsWeather.weather[0].icon, 'weather data response');
        weeee = itemsWeather.weather[0].icon;
        we = `http://openweathermap.org/img/w/${weeee}.png`;
       // console.log(we, 'evo slike');
        setItemsWeather(itemsWeather);
    }

    return (
        <div className="weather">
            <h3>Vremenska prognoza</h3>
            <ul className="weather-item">
                <li>{itemsWeather.name}:<strong>{(itemsWeather.main?.temp - 273.15).toFixed(0)}</strong>&deg;C <img src="http://openweathermap.org/img/w/03d.png" /></li>
                

            </ul>
        </div>
    );

}

export default Weather;