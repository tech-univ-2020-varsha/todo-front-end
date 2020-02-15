import React, { Component } from 'react';
import './index.css';
import propTypes from 'prop-types';
import axios from 'axios';
import Button from '../Button';

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
    };
    this.countChar = (e) => {
      this.setState({
        noteText: e.target.value,
      });
    };
    this.addNote = async () => {
      const { noteText } = this.state;
      const newNote = noteText;
      if (newNote) {
        const result = await axios({
          method: 'post',
          url: 'http://localhost:8080/notes',
          data: {
            title: 'new note',
            description: newNote,
          },
        });
        console.log(result.data);
        props.displayListStateTrue(result.data);
      } else {
        alert('Please fill the note content');
      }
    };
  }


  render() {
    const { noteText } = this.state;
    return (

      <div className="New-Notes-bar">
        <div className="notes-title">
          CREATE NEW NOTE
        </div>
        <div className="new-note">
          <textarea type="text" className="note-text" onKeyUp={this.countChar} />
        </div>
        <div className="num-of-chars">
          {150 - noteText.length}
          {' '}
          characters left
        </div>
        <Button name="SUBMIT" clickAction={this.addNote} />
      </div>

    );
  }
}

export default CreateNote;

CreateNote.propTypes = {
  displayListStateTrue: propTypes.func.isRequired,
};
