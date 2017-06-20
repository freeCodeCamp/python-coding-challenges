import React from 'react';
import { Link } from 'react-router-dom';

const ChallengeNotFound = () => {
  return (
    <div>
      Challenge Not Found
      <Link to="/" >Get Started</Link>
    </div>
  )
}

export default ChallengeNotFound;
