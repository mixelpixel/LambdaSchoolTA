/*
 * I just copied the list of names from the cohorts student list on Repl.it
 * Ideally there's a better way (Airtable?) to access said list, but...
 * This program is expecting a text file with just a lit of names, e.g.
 Ronelle Lawson
 Igor Yermak
 Ashlei Jones
 Steven Magadan
 Glenn-David Daniel
 Dixie Korley
 * names, newlines. That's all. It will cut out the empty string if there's an newline at the text file end.
 * there's a lot of room for improvement
 * the resulting text file still needs some massaging.
 */

const fs = require('fs');
const os = require('os');
const filePath = './students'; // or wherever your list is - note: just a text list of names and line breaks

// const students = ['fred', 'ted', 'bob', 'alice', 'jane', 'jenny', 'frank', 'betty'];
// const students = 'fred\nted\nbob\nalice\njane\njenny\nfrank\nbetty';
const students = fs.readFileSync(filePath, 'utf8').split(os.EOL);

// Get rid of empty string at end of array after split
if (students[students.length - 1] === '') {
  students.pop();
}

// Odd number of students?
if (students % 2 != 0) {
  console.log(`That's ODD - there are ${students.length} students.\nYou need to put ${students[students.length -1]} in a triplet`);
  // TODO: per pair iteration, randomly select a student from odd lists and assign to triplet
}

// cut the list in half - MUTATES original list
const x = students.splice(0, students.length / 2)
// make new lists
const studentHalf_1 = x.slice()
const studentHalf_2 = students.slice()

const numOfPairs = studentHalf_1.length;
const pairs = [];

// Rotating the array - WARNING: Mutates the array
Array.prototype.rotate = function(n) {
  this.unshift.apply(this, this.splice(n, this.length ))
  return this;
}

for (let i = 0; i < numOfPairs - 1; i++) {
  studentHalf_1.rotate(1);
  for (let i = 0; i < numOfPairs; i++) {
    pairs.push(Array(studentHalf_1[i], studentHalf_2[i]));
    pairs.push('\n');
  }
  pairs.push('BREAKBREAKBREAKBREAKBREAKBREAKBREAKBREAK\n\n');
}

for (let i = 0; i < pairs.length; i++) {
  // fs.writeFile('test', pairs.toString(), (err) => {
  fs.writeFile('studentPairs.txt', pairs.toString(), (err) => {
      if(err) {
          return console.log(err);
      }
  });
}
