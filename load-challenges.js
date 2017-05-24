/*global $*/
function getChallengeList() {
  return JSON.parse(localStorage.getItem('fcc-python-challenges'));
}
function setChallengeList(challenges) {
  localStorage.setItem('fcc-python-challenges', JSON.stringify(challenges));
}

function doShowRepl(showRepl) {
  if (showRepl) {
    $("#next-button, #repl").show();
    $("#reset-button, #complete").hide();
  } else {
    $("#next-button, #repl").hide();
    $("#reset-button, #complete").show();
  }
}

function clearClickEvents(elements) {
  $(elements).off("click");
}

function completeChallenge(i) {
  // get localStorage challenge object
  const challenges = getChallengeList();
  // set completed variable of challenge object to true
  challenges[i].completed = true;
  // set localStorage challenge object
  setChallengeList(challenges);

  return challenges;
}

function updateURL(rawString) {
  let s = rawString.toLowerCase();
  s = s.replace(/\s/g, '-');
  window.history.replaceState(null, null, s);
}

function courseComplete(challenges, i) {
  updateURL('course complete');
  $("#prev-button").click(() => {
    doShowRepl(true);
    loadChallenge(challenges, i);
  }).toggleClass("disabled", false).attr("disabled", false);
  doShowRepl(false);
}

function loadChallenge(challenges, i) {
  //clean click events
  clearClickEvents("#next-button, #prev-button");

  // add previous challenge to prev-button
  if ( i === 0 ) $("#prev-button").toggleClass("disabled", true).attr("disabled", true);
  else {
    $("#prev-button").click(() => {
      doShowRepl(true);
      loadChallenge(challenges, i - 1);
    }).toggleClass("disabled", false).attr("disabled", false);
  }

  // add next challenge to next-button
  $("#next-button").click(() => {
    challenges = completeChallenge(i);
    const l = challenges.length;
    if ( i === l - 1) courseComplete(challenges, l - 1);
    else loadChallenge(challenges, i + 1);
  });

  // add current challenge to page
  $("#repl").attr("src", `${challenges[i].repl}?lite=true`);

  //update pageurl
  updateURL(challenges[i].title);
}

function resetChallenges() {
  // clear the localStorage challenge list
  localStorage.clear('fcc-python-challenges');
  // clear the url
  window.history.replaceState(null, null, '');
  // refresh the browser
  window.location.reload(true);
}

function startLoadChallenge() {
  const challenges = getChallengeList();

  let foundIncomplete = false;
  let i = 0;
  while(!foundIncomplete && i < challenges.length) {
    let c = challenges[i];
    if ( !c.completed ) {
      loadChallenge(challenges, i);
      foundIncomplete = true;
    } else {
      i++
    }
  }

  if ( !foundIncomplete ) courseComplete(challenges, challenges.length - 1);
}

function loadChallengeFromMap(id) {
  const challenges = getChallengeList();
  for (const i in challenges) {
    let c = challenges[i];
    if ( c.id === id ) {
      loadChallenge(challenges, i);
    }
  }
}

(() => {
  if ( localStorage.getItem('fcc-python-challenges') ) {
    startLoadChallenge();
  } else {
    $.getJSON("./challenges.json")
      .done(({challenges}) => {
        setChallengeList(challenges);
        startLoadChallenge();
      })
      .fail((jqxhr, textStatus, error ) => {
        console.log(`Req failed: ${textStatus}, ${error}`);
      });
  }
})();

$("#reset-button").click(() => {
  resetChallenges();
});
