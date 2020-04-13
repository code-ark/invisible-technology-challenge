import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather} className='submission-field'>
      <input type="text" name="city" placeholder="city"  />
      <label className="form-space">or</label> 
      <input type="text" name="zipcode" placeholder="zipcode" />
      <button>Search</button>
    </form>
  );
};

export default Form