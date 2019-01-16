import React from 'react';

class DisplayWeather extends React.Component {
  render() {
    const data = [
      this.props.weatherDay,
      this.props.weatherNight,
      this.props.icons
    ];
    return (
      <div>
        {this.props.weatherDay.map((w, index) => {
          return (
            <div key={index}>
              <img
                src={`http://openweathermap.org/img/w/${data[2][index]}.png`}
                alt=""
              />
              <span>{w}</span> <span>{data[1][index]}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayWeather;
