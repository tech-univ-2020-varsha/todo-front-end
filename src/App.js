import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Profile from './Components/Profile';
import NotesList from './Components/NotesList';
import CreateNote from './Components/CreateNote';
import useNotes from './hooks/useNotes';

const App = () => {
  const [listOfNote, setListOfNote] = useNotes();
  const [displayList, setDisplayList] = useState(true);


  const displayListStateFalse = () => {
    setDisplayList(false);
  };
  const displayListStateTrue = async (newNote) => {
    setDisplayList(true);
    setListOfNote([newNote, ...listOfNote]);
  };


  const deleteNote = async (noteId) => {
    const deleteUrl = `http://localhost:8080/notes/${noteId}`;
    await axios.delete(deleteUrl);
    setDisplayList(true);
    const list = listOfNote.filter((note) => note.id !== noteId);
    setListOfNote(list);
  };

  return (
    <div className="App">

      <Profile />
      {
         displayList === true
           ? (
             <NotesList
               displayList={displayList}
               displayListStateFalse={displayListStateFalse}
               listOfNote={listOfNote}
               deleteNote={deleteNote}
             />
           )
           : <CreateNote displayListStateTrue={displayListStateTrue} />
        }

    </div>
  );
};


export default App;
