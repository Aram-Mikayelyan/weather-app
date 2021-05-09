import SearchInput from './SearchInput';
import { useState } from 'react';
import './App.css';
import BasicTable from './BasicTable'

function App() {
  const [state, setState] = useState();

  const [cityState, setCityState] = useState('');

  async function getWeather(text) {
    const response = await fetch(`https://goweather.herokuapp.com/weather/${text}`);
    const countryWeather = await response.json();
    if(countryWeather.temperature === '') {
      console.log(countryWeather.temperature);
       setState(null);
       setCityState(null);
       setState(null);
    }else
    setState(countryWeather);
  }

  return (
    <div className='App'>
      <SearchInput
        onSearch={text => {
          setCityState(text);
          try {
            getWeather(text);
          } catch (err) {
            setState({forecast: []});
          }
          
        }}
      />
      <BasicTable countryWeather={state} text={cityState} />
    </div>
  );
}

export default App;
