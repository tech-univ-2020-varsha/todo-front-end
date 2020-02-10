import React from 'react';
import './index.css';

function Button(props) {
  return (
    <div>
      <button type="submit" className="button" onClick={props.clickAction}>
        <div className="btn-text">{props.name}</div>
      </button>
    </div>
  );
}

export default Button;
