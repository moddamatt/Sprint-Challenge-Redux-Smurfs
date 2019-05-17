import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className = "heading-smurf">
        <p onClick ={props.deleteSmurf} className = "delete">X</p>
        <p onClick = {props.changeSmurf}>Update</p>
      </div>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

export default Smurf;