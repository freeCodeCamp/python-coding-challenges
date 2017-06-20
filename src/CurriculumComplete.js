import React from 'react';
import './styles/CurriculumComplete.css';

const CurriculumComplete = ({history}) => {
  return (
    <div className="curriculum-complete">
      <h2>Congrats! You have completed the FreeCodeCamp Python Curriculum</h2>

      <h3>Wanna do it again? Go ahead and click the button below to reset your progress.</h3>

      <button className="btn" onClick={() => {
        // clear the last-edit date forces the app to reload challenge list
        localStorage.clear('fcc-python-challenges-last-edit');
        history.push('/');
      }}>Reset Curriculum</button>
    </div>
  )
}

export default CurriculumComplete;
