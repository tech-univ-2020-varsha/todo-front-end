import React, { useEffect, useState } from 'react';
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
import DisplayNote from './Components/DisplayNote';
import useNotes from './hooks/useNotes';

const App = () => {
  const [listOfNotes, setListOfNotes] = useNotes([]);
  const deleteNote = async (noteId) => {
    const deleteUrl = `http://localhost:8080/notes/${noteId}`;
    await axios.delete(deleteUrl);
    const list = listOfNotes.filter((note) => note.id !== noteId);
    setListOfNotes(list);
  };
  console.log('listofnotes:', listOfNotes);

  return (
    <div className="App">
      <Profile />
      <Router>
        <Switch>
          <Route exact path="/">

            {' '}
            <NotesList
              listOfNotes={listOfNotes}
              deleteNote={deleteNote}
            />
          </Route>

          <Route exact path="/new">
            <CreateNote setListOfNotes={setListOfNotes} listOfNotes={listOfNotes} />
          </Route>
          <Route exact path="/view" component={DisplayNote} />
        </Switch>
      </Router>
    </div>

  );
};


export default App;
