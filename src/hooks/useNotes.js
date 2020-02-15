import { useState, useEffect } from 'react';
import axios from 'axios';

const useNotes = () => {
  const [listOfNote, setListOfNote] = useState([]);

  useEffect(async () => {
    const result = await axios.get('http://localhost:8080/notes');
    setListOfNote(result.data);
  }, []);
  return [listOfNote, setListOfNote];
};

export default useNotes;
