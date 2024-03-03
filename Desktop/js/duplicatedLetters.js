// // Find duplicated letters in a string

// function duplicatedLetters(str){
//     let result = [];

//     for (let i = 0; i < str.length; i++){
//         for (let j = i + 1; j < str.length; j++){
//             if (str[i] === str[j]){
//                 result.push(str[i]);
//             }
//         }
//     }
//     return result;
// }    

// let str = "hello world";

// let result = duplicatedLetters(str);
// console.log(result);



function duplicates(str) {
    let result = {};

    for (let i = 0; i < str.length; i++) {
        let count = 0;  // Reset count for each new character

        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
                result[str[i]] = count;
            }
        }
    }

    console.log(result);
    return Object.keys(result);
}

console.log(duplicates("hello worldd"));



