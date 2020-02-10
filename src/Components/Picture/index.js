import React from 'react';
import profilePicture from './img_avatar2.png';
import './index.css';


function Picture() {
  return (
    <div className="Profile-Picture">
      <img src={profilePicture} alt="" className="picture" />
      <div className="message">
        Hi Varsha
      </div>
    </div>
  );
}


export default Picture;
