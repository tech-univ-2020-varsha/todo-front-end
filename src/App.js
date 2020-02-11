import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
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
    this.displayListStateTrue = async (newNote) => {
      const { listOfNote } = this.state;
      // console.log([...notesData]);
      this.setState({
        displayList: true,
        listOfNote: [newNote, ...listOfNote],
      });
    };
  }

  getNoteList=async () => {
    const result = await axios.get('http://localhost:8080/notes');
    return result.data;
  }

  deleteNote=async (noteId) => {
    const { listOfNote } = this.state;
    console.log(listOfNote);
    const deleteUrl = `http://localhost:8080/notes/${noteId}`;
    await axios.delete(deleteUrl);
    this.setState({
      displayList: true,
      listOfNote: listOfNote.filter((note) => note.id !== noteId),
    });
  }

  componentDidMount=async () => {
    const notesData = await this.getNoteList();
    this.setState({
      listOfNote: notesData,
    });
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
               deleteNote={this.deleteNote}
             />
           )
           : <CreateNote displayListStateTrue={this.displayListStateTrue} />
        }

      </div>
    );
  }
}

export default App;
