import React from 'react';
import { Link } from 'react-router-dom';
import './styles/GetStarted.css';

const GetStarted = ({ match }) => {
  return (
    <div className='get-started'>
      <h1>Welcome to FreeCodeCamp Python Curriculum.</h1>
      <h3>Your progress is stored directly in your browser (using localStorage).</h3>
      <h2>Happy coding!</h2>


      <Link className="btn link" to={`${match.url}print`}>Start</Link>
    </div>
  );
};

export default GetStarted;
