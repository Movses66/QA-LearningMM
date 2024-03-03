// console.time("time1");
// for (let i = 0; i < 10000; ++i) {
// }
// console.timeEnd("time1");


// console.time("time2");

// let i = 0;

// while (i < 10000) {
//     ++i;
// }
// console.timeEnd("time2");

// performance.now 



// function countNumbers() {
//     for (let i = 1; i <= 100; i++) {
//       console.log(i);
//     }
//   }
  
//   
//   countNumbers();
  
// const prompt = require ('prompt-sync')();
// let x = prompt ("How are you");
    
// if (x === "good"){
//   console.log("Nice");
// } else if (x === "very good"){
//   console.log("Very nice");
// } else {
//   console.log("not nice");
// }


// let x = "nice";

// console.log(isNaN(x));

const numbers = [1, 2, 3, 4, 5];

// Using map to square each number
const squaredNumbers = numbers.map(function(num) {
  return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

