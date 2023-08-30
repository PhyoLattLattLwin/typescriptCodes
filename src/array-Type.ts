// array of numbers
let numbersArray: number[] = [1, 2, 3, 10];

console.log(numbersArray);

// array of string
let productsArray: string[] = ["hats", "shirts", "jeans", "skirt"];

console.log(productsArray);

//array of string and numbers
let mixDataArray1: (string | number)[] = ["hi", 10, "hello"];
console.log(mixDataArray1);

let mixDataArray2: (string | number | boolean)[] = ["hi", 10, "hello", true];
console.log(mixDataArray2);

// nested number type array
let myNums: number[][] = [
  [1, 2],
  [3, 4],
];

console.log(myNums);
export {};
