import React from 'react';
import './index.css';
import propTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  const { clickAction } = props;
  return (
    <div>
      <button type="submit" className="button" onClick={clickAction}>
        <div className="btn-text">{name}</div>
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  name: propTypes.string.isRequired,
  clickAction: propTypes.func.isRequired,
};
