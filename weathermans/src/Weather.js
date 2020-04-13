import React from "react"

const Weather = ({ city, temperature, time }) => {
  return (
    <div className="weather-output">
      {city && <p>Location: {city}</p>}
      {time && <p>Date & Time: {time}</p>}
      {temperature && <p>temperature: {temperature}°F</p>}
    </div>
  )
}

export default Weather
