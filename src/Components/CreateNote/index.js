import React, { Component } from 'react';
import './index.css';
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
    this.addNote = () => {
      props.displayListStateTrue();
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
