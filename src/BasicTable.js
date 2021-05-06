import React, { useEffect } from 'react';
import BasicTable2 from './BasicTable2';

let isRender = false;




export default function BasicTable({ countryWeather, text }) {

    useEffect(() => {
        isRender = true;
    }, []);
    
    if(countryWeather !== undefined) {
        return (
            <BasicTable2 countryWeather={countryWeather} text={text} />
        );
    }else {
         
        
    }
        
    
}