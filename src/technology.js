import React, { useState, useEffect } from 'react';
import './App.css';

function Technology() {

    useEffect(() => {
        fetchItemsTechnology();
    }, []);

    const [itemsTechnology, setItemsTechnology] = useState([]);


    const fetchItemsTechnology = async () => {
        const dataTechnology = await fetch('http://newsapi.org/v2/top-headlines?country=rs&category=technology&apiKey=588a1e43d7ab4b69ac5a1bdcfbbbe85c');
        const itemsTechnology = await dataTechnology.json();
        const articlesTechnology = itemsTechnology.articles;

        console.log(articlesTechnology);
        setItemsTechnology(itemsTechnology);

    }

    return (
        <div>
            <h1 className="title">Tehnologija</h1>
        <div className="items">
            
            {
                itemsTechnology.articles ?
                    itemsTechnology.articles.map(article => {
                        return <div className="itemSport" key={article.title}>
                            <p className="source">{article.source.name}</p>
                            <a href={article.url} target="_blank">
                                <h3 className="sportTitle">{article.title}</h3>
                                <img src={article.urlToImage} /></a>

                        </div>
                    }) : ''}

        </div>
        </div>
    );
}


export default Technology;
