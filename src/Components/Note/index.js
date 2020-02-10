import React from 'react';
import './index.css';
import Button from '../Button';

function Note(props) {
  const doneAction = () => {

  };
  const { noteContent } = props;
  return (

    <div className="note">
      <div className="note-content">{noteContent}</div>

      <Button name="DONE" clickAction={doneAction} />


    </div>

  );
}

export default Note;
