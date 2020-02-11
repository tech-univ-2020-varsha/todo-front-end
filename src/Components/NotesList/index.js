import React from 'react';
import './index.css';
import propTypes from 'prop-types';
import Button from '../Button';
import Note from '../Note';

function NotesList(props) {
  const { listOfNote } = props;
  const createNewNote = () => {
    props.displayListStateFalse();
  };
  return (
    <div className="Notes-bar">
      <div className="notes-title">
        ALL TO-DOs
      </div>
      <div className="notes-list" id="style-1">
        {
          listOfNote.map((note) => <Note noteContent={note.description} />)
        }

      </div>
      <Button name="CREATE NEW" clickAction={createNewNote} />
    </div>
  );
}

export default NotesList;


NotesList.propTypes = {
  listOfNote: propTypes.arrayOf.isRequired,
  displayListStateFalse: propTypes.func.isRequired,
};
