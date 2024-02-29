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

//Bonus 1:

var longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec arcu ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Morbi a odio vitae justo euismod vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
Nunc commodo ac velit at tincidunt. Nulla ullamcorper neque eget augue elementum, eu feugiat metus vulputate. Fusce a feugiat nunc, malesuada porta odio. Fusce at risus scelerisque, 
dapibus purus sit amet, sodales augue. Sed porttitor tincidunt mattis. Sed tristique bibendum pulvinar. Curabitur ut egestas massa, quis vestibulum arcu. Aenean nec congue quam, eu pellentesque urna. 
Sed malesuada ipsum ac enim sagittis, nec egestas risus lobortis.

Maecenas leo purus, lacinia sed nunc sit amet, accumsan facilisis neque. In hac habitasse platea dictumst. Quisque placerat, neque eget mollis ultricies, enim leo ornare quam, id placerat odio metus vel est.
Nulla ultrices dolor sit amet consequat rhoncus. Duis sed risus nec enim finibus sollicitudin placerat quis nisi. Sed in ultricies arcu. Aliquam orci eros, fringilla ut luctus ut, rhoncus id nibh. In lacinia aliquam enim, eget bibendum velit. 
Aliquam sodales consequat felis et pretium. Nullam consequat mollis blandit.

Donec non sem vitae eros efficitur accumsan. Vivamus tristique mollis dui id porttitor. Quisque ut dapibus arcu. Mauris feugiat turpis nunc, accumsan malesuada dui placerat vitae. 
Nunc dolor nulla, venenatis non libero a, egestas laoreet dolor. Maecenas vitae ipsum magna. Nullam at aliquam augue, quis accumsan metus.`;

var splitResult = longText.split(/\s+/);

var countResult = splitResult.filter((word) => word !== "").length;

console.log(countResult);

var wordOccurrence = splitResult.filter((word) => word.toLowerCase() == "et");

var wordCount = wordOccurrence.length;

console.log(wordCount);

//Bonus 2:

var phraseToCHeck = "A man, a plan, a canal, Panama!";

var stringCheck = phraseToCHeck.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

function checkPalindrome(stringCheck) {
  for (let i = 0; i < stringCheck.length / 2; i++) {
    if (stringCheck[i] !== stringCheck[stringCheck - 1 - i]) {
      return false;
    }
  }
  return true;
}

var phraseToCHeck = "A man, a plan, a canal, Panama!";

var stringCheck = phraseToCHeck.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

if (checkPalindrome(stringCheck)) {
  console.log("is palindrome");
}
