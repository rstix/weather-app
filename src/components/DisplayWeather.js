import React from 'react';

const DisplayWeather = props => {
  const data = [props.weatherDay, props.weatherNight, props.icons];
  return (
    <div>
      {props.weatherDay.map((w, index) => {
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
};

export default DisplayWeather;
