import React from 'react';
import './index.css';

const DateTime = () => {
  const date = new Date();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const hour = date.getHours() - (date.getHours() >= 12 ? 12 : 0);

  const period = date.getHours() >= 12 ? 'PM' : 'AM';


  return (
    <div className="date-time">
      <div className="item">
        {`${`${hour}:${date.getMinutes()} ${period}`}`}
      </div>
      <div className="item">
        {
 `${date.getDate()} ${months[date.getMonth()]},${date.getFullYear()}`
        }
      </div>
    </div>
  );
};

export default DateTime;
