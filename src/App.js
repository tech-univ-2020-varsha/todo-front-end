import React, { Component } from 'react';
import './App.css';
import Profile from './Components/Profile';
import NotesList from './Components/NotesList';
import CreateNote from './Components/CreateNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayList: true,
      listOfNote: [],
    };

    this.displayListStateFalse = () => {
      this.setState({
        displayList: false,
      });
    };
    this.displayListStateTrue = () => {
      const { listOfNote } = this.state;
      const newNote = document.getElementById('note-description').value;
      this.setState({
        displayList: true,
        listOfNote: [...listOfNote, newNote],
      });
    };
  }

  render() {
    const { displayList } = this.state;
    const { listOfNote } = this.state;
    return (
      <div className="App">

        <Profile />
        {
         displayList === true
           ? (
             <NotesList
               displayList={displayList}
               displayListStateFalse={this.displayListStateFalse}
               listOfNote={listOfNote}
             />
           )
           : <CreateNote displayListStateTrue={this.displayListStateTrue} />
        }

      </div>
    );
  }
}

export default App;
