// SLICE

let str = "I love programming";

console.log(`My str = ${str} -> ${str.slice(7)}`);
console.log(`My str = ${str} -> ${str.slice(str.indexOf("p"))}`);

// Start = inclusive, End = Exclusive
console.log(`My str = ${str} -> ${str.slice(2, 7)}`);

// Negative indexing
console.log(`My str = ${str} slicing with negative index -> ${str.slice(-5)}`);
console.log(`My str = ${str} slicing with negative index -> ${str.slice(-5)}`);

// Replace ->

console.log(
  `My str = ${str} replacing love with do -> ${str.replace("love", "do")}`
);
console.log(
  `My str = ${str} replacing love with do -> ${str.replace(" ", "")}`
);
console.log(
  `My str = ${str} replacing love with do -> ${str.replaceAll(" ", "")}`
);

console.log(str.repeat(3));