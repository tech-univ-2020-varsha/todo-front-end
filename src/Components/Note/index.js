import React from 'react';
import './index.css';
import propTypes from 'prop-types';
import Button from '../Button';

function Note(props) {
  const { noteContent } = props;

  const doneAction = () => {

  };

  return (

    <div className="note">
      <div className="note-content">{noteContent}</div>
      <Button name="DONE" clickAction={doneAction} />
    </div>

  );
}

export default Note;

Note.propTypes = {
  noteContent: propTypes.string.isRequired,
};
