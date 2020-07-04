import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';
import {Provider} from "react-redux";
import store from "./store";

const API_KEY = "ae3e143f448b41c36a0dbf43c2c31872";

class App extends Component {
  state = { 
    city : undefined,
    country : undefined,
    temperature : undefined,
    humidity : undefined,
    description: undefined,
    speed:undefined,
    error : undefined
   };

  /*getWeather = async (e) => { //arrow functions allow usto use thskeyword indepentely
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
    console.log(data);
    this.setState({ 
      temperature : data.main.temp,
      city : data.name,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      speed : data.wind.speed,
      error : ""
    });
  }else {
    this.setState ({
    temperature : undefined,
      city : undefined,
      country : undefined,
      humidity : undefined,
      description : undefined,
      speed : undefined,
      error : "Please enter the value."
    });
  }
  }*/

  render() { 
    return ( 
     <Provider store={store}>
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles /></div>
                  <div className="col-xs-7 form-container">
                    <Form />
                    <Weather />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Provider>
     );
  }
}
 
export default App;