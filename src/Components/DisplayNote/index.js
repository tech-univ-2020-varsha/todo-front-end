import React from 'react';
import './index.css';
import {
  Redirect, useLocation,
} from 'react-router-dom';

import useNotes from '../../hooks/useNotes';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const DisplayNote = () => {
  const query = useQuery();
  const noteid = query.get('noteID');
  // const { listOfNotes } = props;
  const [listOfNotes, listLoadComplete] = useNotes();

  if (listLoadComplete === null) {
    return <div>Loading....</div>;
  }

  const requiredTodo = listOfNotes.filter((note) => note.id === noteid);
  if (requiredTodo[0]) {
    return (

      <div className="note-display-content">
        <div className="note-view-heading"> VIEW NOTE</div>
        <div className="note-view-content">{requiredTodo[0].description}</div>
      </div>
    );
  }

  return <Redirect to="/" />;
};


export default DisplayNote;
