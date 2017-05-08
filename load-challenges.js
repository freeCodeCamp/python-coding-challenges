/*global $*/

const curriculumCompleteObject = {
  "title": "Congrats!",
  "instructions": ["You completed all of the challenges!"],
  "challengeText": ["Good job!", "<span class='reset' onclick='resetChallenges()'>Reset Challenges</span>"],
  "completed": false,
  "repl": "https://repl.it/Hl1u/1"
};

function appendText(parentId, childrenList) {
  $(parentId).html(null);
  for (let t in childrenList) {
    let textNode = "<p>" + childrenList[t] + "</p>";
    $(parentId).append(textNode);
  }
}

function loadChallenge(challengeObject) {

  // get props from challenge
  const { title, instructions, challengeText, repl } = challengeObject;

  // title
  $("#title").text(title);

  // instructions
  appendText("#instructions", instructions);

  // challengeText
  appendText("#challengeText", challengeText);

  // repl
  let replURL = repl + "?lite=true";
  $("#repl").attr("src", replURL);
}

function completeChallenge(challengeTitle) {
  // if the user has already completed just load the same object
  if (challengeTitle === 'Congrats!') {
    return curriculumCompleteObject;
  }

  // get localstorage challenge object
  const challenges = JSON.parse(localStorage.getItem('fcc-python-challenges'));

  // set completed variable of challenge object to true
  let nextChallenge = {};
  for ( var i in challenges ) {
    i = parseInt(i);
    if ( challengeTitle === challenges[i].title ) {
      challenges[i].completed = true;
      // if a next challenge exists return it, else curriculumCompleteObject
      nextChallenge = i < challenges.length - 1 ? challenges[i + 1] : curriculumCompleteObject;
      break;
    }
  }

  localStorage.setItem('fcc-python-challenges', JSON.stringify(challenges));
  // return next challenge
  return nextChallenge;
}

function loadNextChallenge() {
  // get localStorage challenge object
  const challenges = JSON.parse(localStorage.getItem('fcc-python-challenges'));

  let challengeLoaded = false;
  for ( let i in challenges) {
    // loop through list for the first uncompleted challenge
    if ( !challenges[i].completed) {
      // load it to the page
      loadChallenge(challenges[i]);
      challengeLoaded = true;
      break;
    }
  }
  // if all challenges are complete load the curriculumCompleteObject
  if ( !challengeLoaded ) {
    loadChallenge(curriculumCompleteObject);
  }

}

function resetChallenges() {
  // clear the localStorage challenge list
  localStorage.clear('fcc-python-challenges');
  // refresh the browser
  window.location.reload(true);
}

(() => {
  // Add event handler for Next Challenge button
  $("#next-button").click(() => {
    // gets the current challenge on the page
    const currentChallengeTitle = $("#title").text();
    // passes it to completeChallenge method
    const nextChallenge = completeChallenge(currentChallengeTitle);
    // loads next challenge returned from completeChallenge method
    loadChallenge(nextChallenge);
  });

  // Load the challenges json object
  $.getJSON("./challenges.json", (data) => {
    const challenges = data.challenges;

    // check if it already exists in localStorage
    if(!localStorage.getItem('fcc-python-challenges')) {
      // if not set it
      localStorage.setItem('fcc-python-challenges', JSON.stringify(challenges));
    }
    // load the next uncompleted challenge
    loadNextChallenge();
  });
})();
