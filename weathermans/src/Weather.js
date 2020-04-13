import React from "react"

const Weather = ({ city, temperature, error, time }) => {
  return (
    <div className="weather-output">
      {city && <p>Location: {city}</p>}
      {time && <p>Date & Time: {time}</p>}
      {temperature && <p>temperature: {temperature}°F</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default Weather
