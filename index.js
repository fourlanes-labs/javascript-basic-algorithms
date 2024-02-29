// Iteration 1: Names and Input

var hacker1 = "john";

console.log("The driver's name is ${hacker1}");

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
var capitaliseName = hacker1.toUpperCase().split("").join(" ");

var result = console.log(capitaliseName);

//3.2

var reversedName = hacker2.split("").reverse().join(" ");

console.log(reversedName);

// 3.3

var result = hacker1.localeCompare(hacker2);

if (result < 0) {
  console.log("The driver's name goes first.");
} else if (result > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
