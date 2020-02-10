import React from 'react';
import './index.css';
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
listOfNote.map((note) => <Note noteContent={note} />)
        }

      </div>
      <Button name="CREATE NEW" clickAction={createNewNote} />
    </div>
  );
}

export default NotesList;
