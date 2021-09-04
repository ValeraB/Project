"use strict";

const answer1 = +prompt("Enter first number", "");
const answer2 = +prompt("Enter second number", "");

if (answer1 > answer2) {
  alert(`${answer1} ,is bigger than ${answer2}`);
} else if (answer1 < answer2) {
  alert(`${answer2}, is bigger than ${answer1}`);
}
