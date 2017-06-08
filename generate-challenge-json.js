var fs = require('file-system');

function printList(list) {
  list.forEach((v) => console.log(v));
}

let dir_list = fs.readdirSync('challenges');

//keep directories only
dir_list = dir_list.filter((val) => {
  return fs.statSync(`challenges/${val}`).isDirectory();
});

// get the current challenge object, parse it, save the challenge list
const challenges_string = fs.readFileSync('./challenges.json', 'utf-8');
let challenges_json = JSON.parse(challenges_string);

let challenges_list = challenges_json.challenges;

// create a dictionary where challenges ids are keys
// and their index in the challenges_list is the val
let challenges_id_list = [];
challenges_list.forEach((chapter) => {
  chapter.forEach((c) => {
    challenges_id_list.push(c.id);
  });
});

// loop through dir_list
dir_list.forEach((dir) => {
  const path = `challenges/${dir}/lesson_settings.json`;
  let data = fs.readFileSync(path, 'utf-8');

  if (data.length === 0) return null;

  const challenge = JSON.parse(data);
  const {
    id,
    lesson_title,
    repl,
    chapter_number,
    lesson_number
  } = challenge;

  const default_repl = "https://repl.it/student_embed/assignment/136137/d860e0ad34862a709895f54706dcf9af";

  const lesson_obj = {
    id,
    "title": lesson_title,
    "repl": repl.length === 0 ? default_repl : repl,
    "completed": false,
    "chapter": chapter_number,
    "lesson": lesson_number
  };

  // attempt to autofill 'missing' challenges
  //
  // const blank_lesson_obj = {
  //   "id": null,
  //   "title": "NA",
  //   "repl": default_repl,
  //   "completed": false,
  //   "chapter": null,
  //   "lesson": null
  // }

  if (!challenges_id_list.includes(id)) {
    let chapter = challenges_list[chapter_number];
    // if ( lesson_number !== 1 && chapter.length < lesson_number ) {
    //   for (let i = 1; i < lesson_number; i++ ) {
    //     blank_lesson_obj.chapter = chapter_number;
    //     blank_lesson_obj.lesson = i;
    //     chapter.push(blank_lesson_obj);
    //   }
    // }
    let a = chapter.slice(0, lesson_number);
    let b = chapter.slice(lesson_number + 1, chapter.length);
    a.push(lesson_obj);
    challenges_list[chapter_number] = a.concat(b);
    challenges_id_list.push(id);
  } else {
    challenges_list[chapter_number][lesson_number - 1] = lesson_obj;
  }
});
challenges_json.challenges = challenges_list;
challenges_json.last_edit = Date.now();
fs.writeFile('./challenges.json', JSON.stringify(challenges_json), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
  printList(challenges_list);
});
