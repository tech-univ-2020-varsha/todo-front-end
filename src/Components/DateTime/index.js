import React, { Component } from 'react';
import './index.css';

class DateTime extends Component {
  date = new Date();

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   hour = this.date.getHours() - (this.date.getHours() >= 12 ? 12 : 0);

   period = this.date.getHours() >= 12 ? 'PM' : 'AM';

   render() {
     return (
       <div className="date-time">
         <div className="item">
           {`${`${this.hour}:${this.date.getMinutes()} ${this.period}`}`}
         </div>
         <div className="item">
           {
 `${this.date.getDate()} ${this.months[this.date.getMonth()]},${this.date.getFullYear()}`
        }
         </div>
       </div>
     );
   }
}

export default DateTime;
