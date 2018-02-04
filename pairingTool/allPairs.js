/*
 * I just copied the list of names from the cohorts student list on Repl.it
 * Ideally there's a better way (Airtable?) to access said list, but...
 * This program is expecting a text file with just a lit of names, e.g.
 *
 * Ronelle Lawson
 * Igor Yermak
 * Ashlei Jones
 * Steven Magadan
 * Glenn-David Daniel
 * Dixie Korley
 * ...
 *
 * Names and newlines. That's all. It will cut out the empty string if there's an newline at the text file end.
 * There's a lot of room for improvement:
 * 1) The resulting text file still needs some massaging.
 * 2) I'd like to randomly arrange the list prior to splitting it in half.
 * 3) Also, if an odd sized class, would like to randomly assign a triplet (currently just the last student in the list).
 * 4) Would love to use regex to bettter prepare the final text file.
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

/* This is the list of CS7 students from Repl.it (after removing the percentage signs):
Ronelle Lawson
Igor Yermak
Ashlei Jones
Steven Magadan
Glenn-David Daniel
Dixie Korley
Giraud Julemis
Anthony Catalfo
Mike Streltsoff
Maximo Delarosa
John Spraul
Charlie Sparks
Richard Reis
Michael Marshalkovich
Daniel Lara
Cliff Kang
Courtney Seitz
Russell Stinson
Tommy Coleman
Daniel Abbott
Shobana Ramesh
Peter Gray
Punit Rawal
Jonathan Brunt
David Loveday
Nikhil Kamineni
Dani Tacheny
Boeun Kim
Lokesh Patel
Nathaniel Flory
Eileen Eddy
Jon Anderson
Sergey Nam
Eric Hechavarria
Lo Saephan
Roy Tan
Nathan Flood
Christopher Beards
Amanda Phillips
Cody Windeknecht
Aaron Burk
Kevin Chan
Russell Bates
Jonathan Bry
German Go
Devin Baldwin
Tyson Williams
Ronnie Miksch
Sagdi Formanov
Walter Woodward
David Soudry
*/
