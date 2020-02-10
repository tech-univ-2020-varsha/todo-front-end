import React from 'react';
import Picture from '../Picture';
import DateTime from '../DateTime';
import './index.css';

function Profile() {
  return (
    <div className="profile-bar">
      <Picture />
      <DateTime />
    </div>
  );
}


export default Profile;
