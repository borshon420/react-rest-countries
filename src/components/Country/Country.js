import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name, capital, flag, population} = props.country;
    console.log(props)
    return (
        <div className="country bg-success text-white">
            <h1>Country name: {name}</h1>
            <img src={flag} alt="" />
            <p>Capital: {capital} Population: {population}</p>
        </div>
    );
};

export default Country;