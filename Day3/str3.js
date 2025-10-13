// 1. WAP to check whther the string is empty or not

let str1 = "";
let str2 = "Hello";
console.log(`Is str1 empty? ${str1.length === 0}`);
console.log(`Is str2 empty? ${str2.length === 0}`);

// 2. WAP to check whether the character at the given index is in lower case or not -> Hello SPRK -> index = 5 -> o -> lower case

let str3 = "Hello SPRK";
let index = 4;
let charAtIndex = str3.charAt(index);
let isLowerCase = charAtIndex === charAtIndex.toLowerCase() && charAtIndex !== charAtIndex.toUpperCase();
console.log(`Is the character at index ${index} in str3 lower case? ${isLowerCase}`);

// 3. Good or bad string -> If string starts with uppercase and have length more than 5 characters then display good string
let str4 = "Hell0";
let isGoodString = str4.length > 5 && str4.charAt(0) === str4.charAt(0).toUpperCase();
console.log(`Is str4 a good string ? ${isGoodString}`);


