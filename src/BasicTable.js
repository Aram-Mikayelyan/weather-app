
import BasicTable2 from './BasicTable2';





export default function BasicTable({ countryWeather, text }) {
    
    if(countryWeather === undefined) {
       
        return null;

    }else if(countryWeather === null) {
        
        return (
            <h1 id="h1">Please  Write a Valid City</h1>
        );
    }else
         
        return (
            <BasicTable2 countryWeather={countryWeather} text={text} />
        );
        
}