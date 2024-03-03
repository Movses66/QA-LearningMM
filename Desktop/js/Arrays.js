

// let x = [1, 25, 45, 66, 554];

// let y = x[1];

// console.log(y);
// console.log(x.length);



// // let x = ["vzgo", "gvidon", "bobol"];
// // let i = 0;

// // while (i < x.length) {
//     // console.log(x[i]);
//     // i = i + 1; 
// // }


// // Multidimensional arrays 

// let x = [1, "vlo", true, false, [1, 5, "vzgo"]];

// console.log(x[4][2])

// let board = [
//     ["_", "_", "_"],
//     ["_", "_", "_"],
//     ["_", "_", "_"]
// ];
// // console.log(board[0].join("   ") + "\n" +  board[1].join("   ") + "\n" + board[2].join("   "));
// let player = "x";

// let a = "Hello world";
// let b = a.toUpperCase();

// console.log(b);


// let a = [24,22, [7,[84,99]], [3, 1, 6,], [0,8, [4,5]]];

// console.log(a[3][1] + a[4][2][1] * a[3][0] + a[2].length); // output 18



// let a = ["John", "Jack", "George", "Nika", "Aramis" ];
// console.log(a);
// let i = 0,
//     i2 = a.length - 1;

// while (i < a.length/2) {
//     let d = a[i];
//     a[i] = a[i2];
//     a[i2] = d;

//     i = i + 1;
//     i2 = i2 -1;
// }

// console.log(a);



let names = ["John", "Jack", "George", "Nika", "Gvidon", "Aramis" ];
console.log (names);

let i = 0,
    i2 = names.length - 1;
    
while (i < names.length/2) {
    let reveseName = names[i];
    names[i] = names[i2];
    names[i2] = reveseName;

    i = i + 1;
    i2 = i2 -1;
}

console.log(names);



// let x = [5, 10, 33]; vat orinak 
// let y = [];

// y[0] = x[0] * 2;
// y[1] = x[1] * 2;
// y[2] = x[2] * 2;

// console.log(x);

// console.log(y);


// let x = [5, 10, 33, 123, 555, 848, 55456];
// let y = [];

// let i = 0;

// while(i < x.length) {
//     y[i] = x[i] * 2;
//     i = i + 1;

// }

// console.log(x);

// console.log(y);
