import React from 'react';
import './index.css';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Note = ({
  noteContent, noteId, deleteNote,
}) => {
  const path = `/view?noteID=${noteId}`;
  return (
    <Link to={path} className="create-new-submit-btn">
      {' '}
      <div className="note">
        <div className="note-content">{noteContent}</div>
        <Button name="DONE" clickAction={() => deleteNote(noteId)} />
      </div>
    </Link>
  );
};


export default Note;

Note.propTypes = {
  noteContent: propTypes.string.isRequired,
  noteId: propTypes.string.isRequired,
  deleteNote: propTypes.func.isRequired,
};
