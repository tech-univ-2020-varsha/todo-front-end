import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import propTypes from 'prop-types';
import axios from 'axios';
import Button from '../Button';

const CreateNote = ({ setListOfNotes, listOfNotes }) => {
  const [noteText, setNoteText] = useState('');
  const countChar = (e) => {
    setNoteText(e.target.value);
  };
  const addNote = async () => {
    if (noteText) {
    
      const result = await  axios({
        method: 'post',
        url:  `${process.env.REACT_APP_URL}`,
        data: {
          title: 'new note',
          description: noteText,
        },
      });
      const newNote = result.data;
      setListOfNotes([newNote, ...listOfNotes]);
    } else {
      alert('Please fill the note content');
    }
  };


  return (
    <div className="New-Notes-bar">
      <div className="notes-title">
        CREATE NEW NOTE
      </div>
      <div className="new-note">
        <textarea type="text" className="note-text" onKeyUp={countChar} />
      </div>
      <div className="num-of-chars">
        {150 - noteText.length}
        {' '}
        characters left
      </div>
      <Link to="/" className="create-new-submit-btn">
        <Button name="SUBMIT" clickAction={addNote} />
      </Link>
    </div>

  );
};

export default CreateNote;

CreateNote.propTypes = {
  setListOfNotes: propTypes.func.isRequired,
  listOfNotes: propTypes.arrayOf(propTypes.object).isRequired,
};
