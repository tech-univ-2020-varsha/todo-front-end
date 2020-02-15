import React, { useState } from 'react';
import './index.css';
import propTypes from 'prop-types';
import axios from 'axios';
import Button from '../Button';

const CreateNote = (props) => {
  const [noteText, setNoteText] = useState('');
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     noteText: '',
  //   };
  const countChar = (e) => {
    setNoteText(e.target.value);
    // this.setState({
    //   noteText: e.target.value,
    // });
  };
  const addNote = async () => {
    // const { noteText } = this.state;
    // const newNote = noteText;
    if (noteText) {
      const result = await axios({
        method: 'post',
        url: 'http://localhost:8080/notes',
        data: {
          title: 'new note',
          description: noteText,
        },
      });
      console.log(result.data);
      props.displayListStateTrue(result.data);
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
      <Button name="SUBMIT" clickAction={addNote} />
    </div>

  );
};

export default CreateNote;

CreateNote.propTypes = {
  displayListStateTrue: propTypes.func.isRequired,
};
