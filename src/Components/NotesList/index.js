import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as styles from './index.module.css';
import Button from '../Button';
import Note from '../Note';

const NotesList = ({ listOfNotes, deleteNote }) => {
  const createNewNote = () => true;
  return (
    <div className={styles.NotesBar}>
      <div className={styles.notesTitle}>
        ALL TO-DOs
      </div>
      <div className={styles.notesList} id={styles.style1}>
        {
          listOfNotes.map((note) => (
            <Note
              key={note.id}
              noteContent={note.description}
              noteId={note.id}
              deleteNote={deleteNote}
            />
          ))
        }

      </div>
      <Link to="/new" className={styles.createNewBtn}>
        <Button name="CREATE NEW" clickAction={createNewNote} />
      </Link>

    </div>
  );
};

export default NotesList;


NotesList.propTypes = {
  listOfNotes: propTypes.arrayOf(propTypes.object).isRequired,
  deleteNote: propTypes.func.isRequired,
};
