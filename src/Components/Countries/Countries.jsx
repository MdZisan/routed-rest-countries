import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData()
    return (
        <div>
            <h2>Total Countries: {countries.length}</h2>
            <ul>
                {
                    countries.map(country=><li>{country.name.common}</li>)
                }
            </ul>
        </div>
    );
};

export default Countries;