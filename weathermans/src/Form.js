import React from "react";
import Button from 'react-bootstrap/Button';

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather} className='submission-field'>
      <input type="text" name="input" placeholder="city or zipcode" className="input"  />
      <label className="form-space"></label> 
      <button className="button">Search</button>
    </form>
  );
};

export default Form