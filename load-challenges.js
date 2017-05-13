/*global $*/
function completeChallenge(i) {

  // get localStorage challenge object
  const challenges = JSON.parse(localStorage.getItem('fcc-python-challenges'));

  // set completed variable of challenge object to true
  challenges[i].completed = true;

  // set localStorage challenge object
  localStorage.setItem('fcc-python-challenges', JSON.stringify(challenges));

  return challenges;
}

function updateURL(rawString) {
  let s = rawString.toLowerCase();
  s = s.replace(/\s/g, '-');
  window.history.replaceState(null, null, s);
}

function courseComplete() {
  updateURL('course complete');
  $("#next-button, #repl").hide();
  $("#reset-button, #complete").show();
}

function loadChallenge(challenges, i) {
  //clean click events
  $("#prev-button").off("click");
  $("#next-button").off("click");

  // add previous challenge to prev-button
  if ( i === 0 ) {
    $("#prev-button").toggleClass("disabled", true).attr("disabled", true);

  } else {
    $("#prev-button").toggleClass("disabled", false).click(() => {
      $("#next-button, #repl").show();
      $("#reset-button, #complete").hide();
      loadChallenge(challenges, i - 1)
    }).attr("disabled", false);
  }

  // add next challenge to next-button
  $("#next-button").click(() => {
    // passes it to completeChallenge method
    challenges = completeChallenge(i);

    if ( i === challenges.length - 1) {
      courseComplete();
    } else {

      //due to the recursion, click events pile up and cause bugs
      //this line keeps the next-button click event correct
      $(this).off("click", "**");

      // loads next challenge returned from completeChallenge method
      loadChallenge(challenges, i + 1);
    }
  });

  // add current challenge to page
  $("#repl").attr("src", `${challenges[i].repl}?lite=true`);

  //update pageurl
  updateURL(challenges[i].title);
}

function resetChallenges() {
  // clear the localStorage challenge list
  localStorage.clear('fcc-python-challenges');

  window.history.replaceState(null, null, '');
  // refresh the browser
  window.location.reload(true);
}

function startLoadChallenge() {
  const challenges = JSON.parse(localStorage.getItem('fcc-python-challenges'));

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

  if ( !foundIncomplete ) {
    courseComplete();
  }
}

(() => {
  if ( localStorage.getItem('fcc-python-challenges') ) {
    startLoadChallenge();
  } else {
    $.getJSON("./challenges.json")
      .done((data) => {
        localStorage.setItem('fcc-python-challenges', JSON.stringify(data.challenges));
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
