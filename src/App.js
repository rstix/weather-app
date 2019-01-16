import React, { Component } from 'react';

import './App.css';
import Form from './components/Form';
import DisplayWeather from './components/DisplayWeather';
import Example from './components/Example';

class App extends Component {
  state = {
    city: '',
    weatherDay: [],
    weatherNight: [],
    icons: []
  };

  getWeather = city => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=d679632e82a94868b8da86d2998ce4d6`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const weatherDay = [];
        const weatherNight = [];
        const icons = [];
        for (let i = 0; i < data.list.length; i = i + 8) {
          icons.push(data.list[i].weather[0].icon);
          weatherDay.push(data.list[i].main.temp);
          weatherNight.push(data.list[i + 4].main.temp);
        }
        this.setState({
          city: data.city.name,
          weatherDay,
          weatherNight,
          icons
        });
      });
  };
  render() {
    return (
      <div className="">
        <Form getWeather={this.getWeather} />
        <Example getWeather={this.getWeather} />
        <DisplayWeather
          weatherDay={this.state.weatherDay}
          weatherNight={this.state.weatherNight}
          city={this.state.city}
          icons={this.state.icons}
        />
      </div>
    );
  }
}

export default App;
