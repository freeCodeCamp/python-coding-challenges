/*global $ CodeMirror challenges _*/

var animal = "";
var color = "";
var name1 = "";
var name2 = "";
var ani1 = "";
var ani2 = "";
var bg = "";
var ids = [];
var presents = [];
var title = [];
var borderStyle = [];
const animationList = ["bounce", "flash", "pulse", "rubberband", "shake", "headshake", "swing", "tada", "wobble", "jello"];
var iFrame = {};
var delay = 0;
var currentChallenge = 1;
const lastChallenge = 2;
var ed = "";

function clear() {
  animal = "";
  color = "";
  name1 = "";
  name2 = "";
  ani1 = "";
  ani2 = "";
  title = [];
  ids = [];
  presents = [];
  bg = "";
  ed = "";
  iFrame = {};
  delay = 0;
  currentChallenge = 1;
  borderStyle = [];
  $("#check-button").show();
}

$(() => {

// DOM items
var title = document.getElementById('title');
var instructions = document.getElementById('instructions');
var instructions2 = document.getElementById('instructions2');
var nextChallenge = document.getElementById('next-button');
var checkBtn = document.getElementById('check-button');
var resetBtn = document.getElementById('reset-button');
var successMsg = document.getElementById('success-msg');
var failMsg = document.getElementById('fail-msg');

// var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
//   mode: 'python',
//   lineNumbers: true,
//   // lineNumberFormatter: () => "",
//   theme: "cobalt"
// });

// Get website URL for linkback at top

var url = window.location.href;
$('#linkback').html(`<a href="${url}">Return to Start</a>`);

$('#linkback').click(e => {
  if (!(confirm("Are you sure you want to restart? You'll lose any progress.")))
    e.preventDefault();
  else clear();
});

// Set up preview seed and hide lines irrelevant to learner

function setupEditor(challenge) {
 var editorVal = '';
 if (typeof challenge.seed.code === "function") {
   challenge.seed.code = challenge.seed.code();
 }
 for (var i = 0; i < challenge.seed.code.length; i++) {
   editorVal += (typeof challenge.seed.code[i] === "function") ? challenge.seed.code[i]() : challenge.seed.code[i];
   if (!(i === challenge.seed.code.length - 1)) {
     editorVal += "\n";
   }
 }
 // editor.setValue(editorVal);
 // if (typeof challenge.seed.hiddenLines === "function") {
 //   challenge.seed.hiddenLines = challenge.seed.hiddenLines();
 // }
 // for (var j = 0; j < challenge.seed.hiddenLines.length; j++) {
 //   var range = challenge.seed.hiddenLines[j];
 //   editor.markText({line: range.start}, {line: range.end}, {inclusiveRight: true, inclusiveLeft: true, collapsed: true});
 // }
}

// Set up instructions for current challange

function setupText(challenge) {
 successMsg.className = 'hidden';
 title.innerText = challenge.name;


 // Clear old instructions
 while(instructions.firstChild) {
   instructions.removeChild(instructions.firstChild);
 }

 for (var i = 0; i < challenge.instructions.length; i++) {
   var p = document.createElement("p");
   (typeof challenge.instructions[i] === "function") ?
   p.innerHTML = challenge.instructions[i]() :
   p.innerHTML = challenge.instructions[i];
   instructions.appendChild(p);
 }
 //clear old frame
 while(instructions2.firstChild) {
   instructions2.removeChild(instructions2.firstChild);
 }

 for (var i = 0; i < challenge.frame.length; i++) {
   var p = document.createElement("p");
   (typeof challenge.frame[i] === "function") ?
   p.innerHTML = challenge.instructions[i]() :
   p.innerHTML = challenge.frame[i];
   instructions2.appendChild(p);
 }

}

function updatePreview() {
  var previewFrame = document.getElementById('preview');
  // var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
  // preview.open();
  // preview.write(editor.getValue());
  // preview.close();
  // editor.refresh();
}

function constructPage(challengeNumber) {
  var challenge = _.find(challenges, c => c.number === challengeNumber);

  // nextChallenge.className += " hidden"
  setupEditor(challenge);
  setupText(challenge);
}
//
// editor.on("change", function() {
//   clearInterval(delay);
//   delay = setTimeout(updatePreview, 300);
// });

nextChallenge.onclick = function() {
  if (++currentChallenge === lastChallenge) {
    $("#check-button").hide();
    nextChallenge.className = 'hidden';
  }

  constructPage(currentChallenge);
}

constructPage(currentChallenge);

// resetBtn.onclick = function() {
//   setupEditor(challenges[currentChallenge - 1]);
// }

// Display either a message of success or indication of error, based on test results

// function displayResults(testMsgs) {
//  if (testMsgs.length === 0) {
//    challenges[currentChallenge - 1].callbacks.forEach(func => {
//      func();
//    });
//    successMsg.className = '';
//    successMsg.innerText = "Well done! Click the Next Challenge button to continue.";
//    nextChallenge.className = 'btn';
//  } else {
//    failMsg.className = '';
//    for (var i = 0; i < testMsgs.length; i++) {
//      var p = document.createElement('p');
//      p.innerText = testMsgs[i];
//      failMsg.appendChild(p);
//    }
//  }
// }

function runChallengeTests(challengeNumber) {
  // Clear any existing error messages
  // if (failMsg.firstChild) {
  //   failMsg.className = "hidden";
  //   while (failMsg.firstChild) {
  //     failMsg.removeChild(failMsg.firstChild);
  //   }
  // }
  var challenge = _.find(challenges, c => c.number === challengeNumber);
  var testMsgs = [];

  for (var i = 0; i < challenge.tests.length; i++) {
    var testObj = challenge.tests[i];
    //console.log($('#preview').contents().find('#img-cont')[0].src);
    var pass = (typeof testObj.test === "function") ? testObj.test() : eval(testObj.test);
    if (!pass) {
      testMsgs.push(testObj.message);
    }
  }
  displayResults(testMsgs);
}

// checkBtn.onclick = function() {
//   runChallengeTests(currentChallenge);
// }

});
