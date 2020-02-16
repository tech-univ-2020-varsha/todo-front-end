import React from 'react';
import './index.css';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Note from '../Note';

const NotesList = ({ listOfNote, deleteNote }) => {
  const createNewNote = () => true;
  return (
    <div className="Notes-bar">
      <div className="notes-title">
        ALL TO-DOs
      </div>
      <div className="notes-list" id="style-1">
        {
          listOfNote.map((note) => (
            <Note
              key={note.id}
              noteContent={note.description}
              noteId={note.id}
              deleteNote={deleteNote}
            />
          ))
        }

      </div>
      <Link to="/new">
        <Button name="CREATE NEW" clickAction={createNewNote} />
      </Link>

    </div>
  );
};

export default NotesList;


NotesList.propTypes = {
  listOfNote: propTypes.arrayOf(propTypes.object).isRequired,
  deleteNote: propTypes.func.isRequired,
};
