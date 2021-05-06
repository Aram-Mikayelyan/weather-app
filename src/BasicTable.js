import React from 'react';
import BasicTable2 from './BasicTable2';






export default function BasicTable({ countryWeather, text }) {
    if(countryWeather !== undefined) {
        console.log('jdfhjshfd');
        console.log(countryWeather);
        return (
            <BasicTable2 countryWeather={countryWeather} text={text} />
        );
    }else {
        return null;
    }
        
    
}