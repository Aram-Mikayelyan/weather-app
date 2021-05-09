
import BasicTable2 from './BasicTable2';





export default function BasicTable({ countryWeather, text }) {
    
    if(countryWeather !== undefined) {
        return (
            <BasicTable2 countryWeather={countryWeather} text={text} />
        );
    }else {
         
        return null;
    }
        
    
}