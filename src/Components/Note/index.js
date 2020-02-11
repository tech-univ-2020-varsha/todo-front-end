import React from 'react';
import './index.css';
import propTypes from 'prop-types';
import Button from '../Button';

function Note(props) {
  const { noteContent } = props;
  const { noteId } = props;
  const { deleteNote } = props;
  //   const doneAction = async () => {
  //     const deleteUrl = `http://localhost:8080/notes/${noteId}`;
  //     await axios.delete(deleteUrl);
  //   };

  return (

    <div className="note">
      <div className="note-content">{noteContent}</div>
      <Button name="DONE" clickAction={() => deleteNote(noteId)} />
    </div>

  );
}

export default Note;

Note.propTypes = {
  noteContent: propTypes.string.isRequired,
  noteId: propTypes.string.isRequired,
  deleteNote: propTypes.func.isRequired,
};
