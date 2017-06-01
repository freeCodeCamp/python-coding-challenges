/*global $*/
function createLesson(title, id) {
  const linkNode = document.createElement("a");
  linkNode.classList.add("lesson-link");
  linkNode.appendChild(document.createTextNode(title));
  linkNode.setAttribute("href", "");
  linkNode.setAttribute("onclick", `loadChallengeFromMap('${id}')`);
  const listNode = document.createElement("li");
  listNode.classList.add("lesson-list-element");

  listNode.appendChild(linkNode);

  return listNode;
}
function createChapter(title, lessonList) {
  const chapterNode = document.createElement("div");
  chapterNode.classList.add("chapter");

  const titleSpanNode = document.createElement("span");
  titleSpanNode.classList.add("chapter-title");
  titleSpanNode.appendChild(document.createTextNode(title));

  chapterNode.appendChild(titleSpanNode);

  const lessonListNode = document.createElement("ul");
  lessonListNode.classList.add("lesson-list");

  lessonList.forEach((lesson) => {
    lessonListNode.appendChild(createLesson(lesson.title, lesson.id));
  });

  chapterNode.appendChild(lessonListNode);

  return chapterNode;
}
function renderMap() {
  const map = document.getElementById("map");

  const challengeList = document.createElement("div");
  challengeList.classList.add("challenge-list");


  $.getJSON("./challenges.json")
    .done(({chapters, challenges}) => {
      challenges.forEach((lessons, i) => {
        const title = chapters[i];
        challengeList.appendChild(createChapter(title, lessons));
      });
    })
    .fail((jqxhr, textStatus, error ) => {
      console.log(`Req failed: ${textStatus}, ${error}`);
    });

    map.appendChild(challengeList);

}

renderMap();
