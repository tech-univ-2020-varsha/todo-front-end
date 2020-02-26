import { useState, useEffect } from 'react';
import axios from 'axios';

const useNotes = () => {
  const [listOfNotes, setListOfNotes] = useState([]);
  const [listLoadComplete, setListLoadComplete] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${process.env.REACT_APP_URL}`);
        setListOfNotes(result.data);
        console.log(result);
        setListLoadComplete(true);
      } catch (err) {
        setListLoadComplete(false);
      }
    };
    fetchData();
    return () => { console.log('unmounted'); return null; };
  }, []);

  return [listOfNotes, setListOfNotes, listLoadComplete];
};

export default useNotes;
