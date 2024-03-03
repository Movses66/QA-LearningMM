/*Modulo with for loop
    for (let i = 0; i < x.length; i++) {: This is the beginning of a for loop that iterates through each element of the array x. The loop starts with i being 0 and increments i by 1 in each iteration until i reaches the length of array x.
    if (x[i] % 2 !== 0) {: Inside the loop, there is an if statement that checks if the current element at index i in array x is an odd number. The condition x[i] % 2 !== 0 checks if the remainder when dividing x[i] by 2 is not equal to 0, which is the condition for an odd number.
    y.push(x[i]);: If the condition in the if statement is true (meaning the current element is an odd number), this line is executed. The push method is used to add the current element x[i] to the end of the array y.
    y: This is the array to which elements are being added.
    .push(x[i]): This method appends the value of x[i] to the end of the array 
    The loop continues to the next iteration or ends, depending on the value of i and the length of array x.
    After the loop, console.log(y); prints the final array y to the console, which contains only the odd numbers from the original array x.
    In summary, y.push(x[i]); is responsible for adding the current element from array x to array y when the condition (odd number check) is met during each iteration of the loop.
*/

// let x = [5, 8, 19, 340, 24, 58, 9190];
// let y = [];

// for (let i = 0; i < x.length; i++ ){
//     if (x[i] % 2 !== 0){
//         y.push(x[i]);
//     }
// }
// console.log(y);








/*Modulo with while loop 

let x = [5, 8, 19, 340, 24, 58, 9190];: Initializes an array x with some numbers.
let y = [];: Initializes an empty array y.
let i = 0;: Initializes a variable i to keep track of the current index in array x.
let i2 = 0;: Initializes a variable i2 to keep track of the current index in array y.
while (i < x.length) {: Starts a while loop that iterates through each element of array x.
if (x[i] % 2 !== 0) {: Checks if the current element in array x is an odd number.
y[i2] = x[i];: If the current element is odd, adds it to array y.
i2 = i2 + 1;: Increments the index for array y.
i = i + 1;: Increments the index for array x.
}: Closes the if statement.
}: Closes the while loop.
console.log(y);: Prints the final array y to the console.
The output of this code would be an array containing the odd numbers from the original array x.
*/


// let x = [5, 8, 19, 340, 24, 58, 9190];
// let y = [];

// let i = 0;
// let i2 = 0;

// while (i < x.length) {
//   if (x[i] % 2 !== 0) {
//     y[i2] = x[i];
//     i2 = i2 + 1;
//   }
//   i = i + 1;
// }

// console.log(y);



// Examples: Checking for Even and Odd numbers with modulo

// function isEven(x) {
//     return x % 2 === 0;
// }

// function isOdd(x) {
//     return x % 2!== 0;
// }

// console.log(isEven(5));

// console.log(isOdd(5));



function isEvenOrOdd(num) {
    if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  // Check if 7 is even or odd
  console.log(isEvenOrOdd(7));
 
