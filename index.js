// Iteration 1: Names and Input

var hacker1 = "John";

var hacker2 = "lawrence";

console.log("The navigator's name  ${hacker2}");

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has ${hacker1.length} characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has ${hacker2.length} characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, ${hacker1.length} characters!"
  );
}

// Iteration 3: Loops

// 3.1
var captaliseName = hacker1.toUpperCase();

var splitName = captaliseName.split(" ").join(" ");

var result = console.log(splitName);

//3.2

var splitNameTwo = hacker2.split(" ");

var reverseName = splitNameTwo.reverse();

var resultTwo = reverseName.join(" ");

console.log(resultTwo);

// 3.3

var result = hacker1.localeCompare(hacker2);

if (result < 0) {
  console.log("The driver's name goes first.");
} else if (result > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
