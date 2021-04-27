import SearchInput from './SearchInput';
import {useState} from 'react';
import './App.css';
import BasicTable from './BasicTable'

function App() {
  const [state, setState] = useState({
    forecast: []
  });

  const [cityState, setCityState] = useState('');

  async function f(text) {
    try{
      const response = await fetch(
        `https://goweather.herokuapp.com/weather/${text}`
      );
      const countryWeather = await response.json(); 
      setState(countryWeather);
    } catch (err) {
      
    }
    
  }

  return (
    <div className='App'>
      <SearchInput
        onSearch={text => {
          setCityState(text)
          f(text);
        }}
      />
      <BasicTable countryWeather={state} text={cityState} />
    </div>
  );
}

export default App;
