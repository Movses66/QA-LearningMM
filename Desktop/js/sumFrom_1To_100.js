// function sumOfNumbers(){
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//         sum += i;
    
// }
// return sum;
// }

// const result = sumOfNumbers();

// console.log("Sum of numbers is " + result);



function calculateSum() {
    let sum = 0;
  
    for (let i = 1; i <= 100; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  // Call the function and store the result
  let result = calculateSum();
  
  console.log("The sum of numbers from 1 to 100 is:", result);
  