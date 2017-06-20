import React from 'react';
import { withRouter } from 'react-router';
import ChallengesJSON from './challenges.json';
import './styles/Map.css';

// Rendering is broken up into multiple functions. Don't let them intimdate you.
// Essentially each one returns a list of DOM elements.
// Menu > ChallengeList > Chapter > Lesson > Link
// Start component flow at bottom of file


/* 4. Render the list of lessons with a link that pushes the history to that particular challenge

  Also check the current challenge list to see if the challenge is completed.
  If so add a check mark!

*/
function renderLesson({title, id}, history, challengesList) {
  const url = title.toLowerCase().replace(" ", "-");
  const challenge = challengesList.find(c => c.title === title);
  const completed = challenge.completed;
  return (
    <li key={id} className="lesson-list-element">

      <button
        className="lesson-link"
        onClick={() => {
          history.push(`${url}`)
        }}
      >{ completed ? <i className="fa fa-check"></i> : null } {title}</button>
    </li>
  )
}

/* 3. make sure to add a key to each chapter element */
function renderChapter(title, lessons, history, challengesList) {
  return (
    <div key={title} className="chapter">
      <span className="chapter-title">{title}</span>
      <ul className="lesson-list">
        {/* nesting lessons under chapter name */}
        {lessons.map(lesson => renderLesson(lesson, history, challengesList))}
      </ul>
    </div>
  )
}

/* 2. Destructure challenges and chapters from JSON data
  Continue to pass the history and challengesList args through the functions
  */
function renderChallengeList({challenges, chapters}, history, challengesList) {
  return challenges.map((lessons, i) => {
    const title = chapters[i];
    return renderChapter(title, lessons, history, challengesList);
  });
}


// Start here
/* 1. Destructure variables from props object */
const Map = ({ challengesList, history, toggleMap, width }) => {
  return (
    <div className="map" style={{ width: width }}>
      <div className="challenge-list">
        {/* Pass the raw JSON object, the history object, and the current challengesList (inherited from App.js) */}
        {renderChallengeList(ChallengesJSON, history, challengesList)}
      </div>
      <a href="javascript:void(0)" className="close-map" onClick={() => toggleMap()}>&times;</a>
    </div>
  );
}

export default withRouter(Map);
