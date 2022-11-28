// Aprogram that prompts the user to input student marks.

let marks = prompt("Please enter your marks");
let myMarks = parseInt(marks);
console.log(typeof marks);

function calculateMarks(l) {
if (l >= 79 && l < 100) {
    console.log("A");
  } else if (l >= 60 && l < 79) {
    console.log("B");
  } else if (l  >= 49 && l < 59) {
    console.log("C");
  } else if (l >= 40 && l < 49) {
    console.log("D");
  } else if (l >= 0 && l < 40) {
    console.log("E");
  }
}


calculateMarks(myMarks)