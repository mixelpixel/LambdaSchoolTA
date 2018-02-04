const fs = require('fs');
const os = require('os');
const filePath = '../csv/students'; // or wherever your list is - note, not actuall a csv file, just a text list of names and line breajs

let students = fs.readFileSync(filePath, 'utf8').split(os.EOL);
students.pop(); // gets ride of trailing comma
// const students = ['fred', 'ted', 'bob', 'alice', 'jane', 'jenny', 'frank', 'betty'];
if (students % 2 != 0) {
  console.log(`Odd number of students, you need to put ${students[students.length -1]} in a triplet`)
}

const x = students.splice(0, students.length / 2) // cut the list in half
// make new lists
const studentHalf_1 = x.slice()
const studentHalf_2 = students.slice()

const pairedClassSize = studentHalf_1.length;
const pairs = [];

// Rotating the array - WARNING: Mutates the array
Array.prototype.rotate = function( n ) {
  this.unshift.apply( this, this.splice( n, this.length ) )
  return this;
}

for (let i = 0; i < pairedClassSize - 1; i++) {
  studentHalf_1.rotate(1);
  for (let i = 0; i < pairedClassSize; i++) {
    pairs.push(Array(studentHalf_1[i], studentHalf_2[i]));
    pairs.push('\n');
  }
  pairs.push("BREAKBREAKBREAKBREAKBREAKBREAKBREAKBREAK\n\n");
}
// console.log(pairs);
// fs.writeFile("test", JSON.stringify(pairs), (err) => {

for (let i = 0; i < pairs.length; i++) {
  // fs.writeFile("test", JSON.stringify(pairs), (err) => {
  fs.writeFile("test", pairs.toString(), (err) => {
      if(err) {
          return console.log(err);
      }
      // console.log("The file was saved!");
  });
}
