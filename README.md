FreeCodeCamp Python Curriculum
=============

View live: https://freecodecamp.github.io/python-coding-challenges

To run locally:
1. Fork this repo
2. Run `git clone [your-fork-url]`
3. Run `npm install`
4. Run `npm run start`

Adding a new challenge or fixing an existing one?

- Generating challenge ID:
  1. Open your terminal
  2. run `mongo`
  3. run `ObjectId()`
  4. copy string and paste into lesson_settings.json

- Building challenges.json file:
  1. Open your terminal
  2. Navigate to project directory
  3. run `node generate-challenge-json.js`
  4. if no errors are thrown you're good to commit and open a pr

- Opening a PR
  1. Include a reference to the issue
  2. If its a new challenge, mention the chapter its being added to
  3. continue being awesome and helping us create this curriculum!


Maintaining your Fork:
  1. `git remote add upstream https://github.com/freeCodeCamp/python-coding-challenges.git`
  2. `git checkout master`
  3. `git pull upstream`
