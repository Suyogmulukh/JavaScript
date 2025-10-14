/*
Task:
1. For the given start state of array change to final state
start -> ["november","march","december","july"]
final ->["july","june","december","january"]
 */

let months = ["November", "March", "December", "July"];

console.log(months);

console.log(months.shift());
console.log(months.shift());
console.log(months.unshift("june"));
console.log(months.unshift("july"));
console.log(months.pop());
console.log(months.push("january"));

console.log(months);




