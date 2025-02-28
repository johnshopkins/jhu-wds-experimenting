import React from 'react';

export default ({ type, name, option }) => 
  <div className={`jhu-${type}`}>
    <input id={option.value} type={type} name={name} value={option.value} defaultChecked={option.checked} />
    <label htmlFor={option.value}>
      {option.displayValue}
      {option.description && <span>{option.description}</span>}
    </label>
  </div>;
