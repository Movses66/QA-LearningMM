/*
 Write a program that prompts a user for their age.  If the submitted age is less than 10, show an alert “hi”.  If the age is greater than or equal to 10 but less than 18, alert “hello”.  In all other cases, alert “greetings”.
*/
let age = +prompt("How old are you?");

if (age > 18){
	alert("hi");
} else if (age >= 10 & age < 18){
	alert ("hello");
}	else {
	alert ("greetings")
} 



/*
Write a program that keeps asking the user for a number.  When the user writes exit, show an alert that has the sum of all previously typed numbers in it and end the program.
*/
let result = 0;
while(true){
	let answer = prompt("Please provide your answer");
  
  if (answer === "exit"){
  	alert ("Result is " +result);
    break;
}

let num = +answer;
result = result + num;
}

// Write a function called computeTriangleArea that takes the base and height of a triangle and returns the computed area of the triangle.  Example: computeTriangleArea(2, 9); should return 9 as the result.
let computrTrianleArea = function(base, height){
	return (base * height) / 2;
};

alert(computrTrianleArea(2,9));


// Write a function called reverse that takes an array and returns a new array that has the same values as the original array but sorted in the reverse order.  Example:  reverse([1, 2, 3, 4]); should return an array like this: [4, 3, 2, 1]

let reverse = function(arr) {
	let resultArr = [];
  
  let i = 0;
  let i2 = arr.length - 1;
  
  while (i2 >= 0){
  	resultArr[i] = arr[i2];
    i = i + 1;
    i2 = i2 - 1;
  }
  return resultArr;
}

alert(reverse([1,2,3,4]));

// Write a function called average which, given an array of numbers, returns the average (or mean) of these numbers.  Example: average([4, 3, 6, 10, 2]); should return 5

let average = function(arr){


	let runningSum = 0;
	let i = 0;
  while(i <arr.length){
  runningSum = runningSum + arr[i];
  i = i + 1;
  }
  return runningSum / arr.length;
  
};

alert(average([4,3,2,5,6,2]));