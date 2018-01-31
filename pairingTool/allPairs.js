const student1 = ['fred', 'ted', 'bob', 'alice', 'jane', 'jenny', 'frank', 'betty'];
const classSize = student1.length;
// console.log(classSize);
const student2 = student1.slice(); // <--- just copies all elements from source array, all new references!
console.log(student2);
const pairs = [];

// Rotating the array - WARNING: Mutates the array
Array.prototype.rotate = function( n ) {
  this.unshift.apply( this, this.splice( n, this.length ) )
  return this;
}

for (let i = 0; i < classSize - 1; i++) {
  console.log(student1.rotate(1));
  for (let i = 0; i < classSize; i++) {
    pairs.push(Array(student1[i], student2[i]));
    // console.log("iterate", pairs);
  }
  pairs.push("BREAKBREAKBREAK");
}
console.log(pairs);




// const fs = require('fs');
// const os = require('os');
// const filePath = '../csv/students.csv';
//
// let csv = fs.readFileSync(filePath, 'utf8').split(',');
// // csv.pop();
// // csv.pop();
//
//
// // console.log('Initial File content: ' + csv);
// // console.log(typeof(csv));
// // console.log(typeof(csv[0]));
// // console.log(csv);
// // const student1 = csv.split(',');
// // console.log(student1);
//
//
// const student1 = ['fred', 'ted', 'bob', 'alice', 'jane', 'jenny', 'frank', 'betty'];
// // const student1 = csv.slice(0, csv.length - 2); // chops off command and consultant
// const classSize = student1.length;
// // console.log(classSize);
// const student2 = student1.slice(); // <--- just copies all elements from source array, all new references!
// // console.log(student2.length);
// const pairs = [];
//
// // Rotating the array - WARNING: Mutates the array
// Array.prototype.rotate = function( n ) {
//   this.unshift.apply( this, this.splice( n, this.length ) )
//   return this;
// }
//
// student1.forEach((x) => {
//   pairs.push(new Array);
// })
//
// console.log(pairs);
//
// for (let i = 0; i < classSize - 1; i++) {
// // for (let i = 0; i < 4 - 1; i++) {
//   console.log(student1.rotate(1));
//
//   for (let j = 0; j < classSize; j++) {
//   // for (let j = 0; j < 5; j++) {
//     pairs[j].push(Array(student1[j], student2[j]));
//     // console.log(pairs[j]);
//     // console.log("iterate", pairs);
//   }
//   pairs.push("BREAKBREAKBREAK");
// }
// // console.log(pairs.length);
// console.log(pairs);
