import React, { Component } from 'react';
import './index.css';
import propTypes from 'prop-types';
import Button from '../Button';

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfChars: 0,
    };
    this.countChar = (e) => {
      this.setState({
        numOfChars: e.target.value.length,
      });
    };
    this.addNote = async () => {
      const newNote = document.getElementById('note-description').value;
      if (newNote) {
        const http = new XMLHttpRequest();
        const url = 'http://localhost:8080/notes';
        const payload = {
          title: 'new note',
          description: newNote,
        };
        http.open('POST', url);
        http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        http.onreadystatechange = () => { // Call a function when the state changes.
          if (http.readyState === 4 && http.status === 200) {
            props.displayListStateTrue();
            console.log(http.responseText);
          }
        };
        http.send(JSON.stringify(payload));
      } else {
        alert('Please fill the note content');
      }
    };
  }


  render() {
    const { numOfChars } = this.state;
    return (

      <div className="New-Notes-bar">
        <div className="notes-title">
          CREATE NEW NOTE
        </div>
        <div className="new-note">
          <textarea type="text" className="note-text" onKeyUp={this.countChar} id="note-description" />
        </div>
        <div className="num-of-chars">
          {150 - numOfChars}
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
