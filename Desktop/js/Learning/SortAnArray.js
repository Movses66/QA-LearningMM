// // Given an array of integers nums, sort the array in ascending order and return it.

// let nums = [5,2,1,6,3,4];

// nums.sort();
// nums.reverse();


// console.log(nums);




// // Define a function called sortArray that takes an array of numbers as input
// function sortArray(nums) {
//     // Get the number of elements in the array and store it in a variable called 'n'
//     const n = nums.length;

//     // Start a loop that will go through each element of the array
//     for (let i = 0; i < n - 1; i++) {
//         // Inside the first loop, start another loop for comparing pairs of elements
//         for (let j = 0; j < n - i - 1; j++) {
//             // Compare if the current element is greater than the next element in the array
//             if (nums[j] > nums[j + 1]) {
//                 // If the condition is true, swap the two elements
//                 const temp = nums[j];  // Temporary variable to hold the value of nums[j]
//                 nums[j] = nums[j + 1];  // Assign the value of nums[j + 1] to nums[j]
//                 nums[j + 1] = temp;  // Assign the original value of nums[j] to nums[j + 1]
//             }
//         }
//     }

//     // After both loops finish, return the sorted array
//     return nums;
// }

// // Example usage:
// // Create an array of numbers
// const inputArray = [4, 2, 7, 1, 9, 5];
// // Call the sortArray function with the created array and store the result in sortedArray
// const sortedArray = sortArray(inputArray);

// // Log the sorted array to the console
// console.log(sortedArray);


function sortArray(arr) {

let temp = 0;
    

for (let i =  0; i < arr.length; i++) {
    for(let j = i; j< arr.length; j++){
        if(arr[i] > arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
return arr;
}

    
console.log(sortArray[1, 5, 6, 7, 8, 15, 44, 213, 879, 214]);
