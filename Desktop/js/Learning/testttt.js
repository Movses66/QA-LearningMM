// function sortArray (arr){
//     let temp = 0;

//     for (let i= 0; i < arr.length; i++) {
//         for (let j = 0; j< arr.length; j++) {
//             if (arr[i]> arr[j]){
//                 temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(sortArray([1,5,6,8,2,3,7,11,55,44,98]));



function sortArrayofNames(arr){
    let temp = 0;

    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        return arr;
    }
}
    console.log(sortArrayofNames(['Bob', 'Alice', 'David', 'Charlie', 'Eva']));