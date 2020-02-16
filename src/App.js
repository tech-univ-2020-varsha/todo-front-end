import React from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Profile from './Components/Profile';
import NotesList from './Components/NotesList';
import CreateNote from './Components/CreateNote';
import useNotes from './hooks/useNotes';
import DisplayNote from './Components/DisplayNote';

const App = () => {
  const [listOfNote, setListOfNote] = useNotes();


  const deleteNote = async (noteId) => {
    const deleteUrl = `http://localhost:8080/notes/${noteId}`;
    await axios.delete(deleteUrl);
    const list = listOfNote.filter((note) => note.id !== noteId);
    setListOfNote(list);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Profile />
            {' '}
            <NotesList
              listOfNote={listOfNote}
              deleteNote={deleteNote}
            />
          </Route>

          <Route exact path="/new">
            <CreateNote setListOfNote={setListOfNote} listOfNote={listOfNote} />
          </Route>
          <Route path="/view/:id" />
          <DisplayNote />
        </Switch>
      </Router>
    </div>

  );
};


export default App;
