import React from 'react';
import './index.css';
import propTypes from 'prop-types';
import {
  BrowserRouter as Router,
  useParams,
} from 'react-router-dom';

const DisplayNote = ({ noteDescription }) => (
  <div className="note-display-content">
    <div className="note-view-heading"> VIEW NOTE</div>
    <div className="note-view-content">{noteDescription}</div>
  </div>
);

DisplayNote.propTypes = {
  noteDescription: propTypes.string.isRequired,
};
export default DisplayNote;
