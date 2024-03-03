// // Check if the given string is palindrome, return "true", else, return "false"
// // examp. 1:  "level"
// // examp. 2: "chair"





function isPalindrome(str) {
    let b = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[b]) {
            return false;
        }
        b--;
    }
    return true;
}
 
let str1 = "level";
let str2 = "chair";
let str3 = "Rama";
let str4 = "noon";
 
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));




// function palindrome(isPalindrome) {
//     return 'true';
// }
// console.log(palindrome("level"))
// console.log(palindrome("Don't nod."))
