// Write a generator function that returns a generator object which yields the fibonacci sequence.

// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

 

// Example 1:

// Input: callCount = 5
// Output: [0,1,1,2,3]
// Explanation:
// const gen = fibGenerator();
// gen.next().value; // 0
// gen.next().value; // 1
// gen.next().value; // 1
// gen.next().value; // 2
// gen.next().value; // 3


// Example 2:

// Input: callCount = 0
// Output: []
// Explanation: gen.next() is never called so nothing is outputted


function fibGenerator (n) {
    let output = [];
    if(n <= 0){
        output
    }
    else if(n === 1){
        output.push(0)
    }
    else if (n ===2){
        output.push(0,1)
    }
    else{
        output.push(0,1)
        for (let i = 1; i <= n - 2; i++) {
            output.push(output[i]+ output[i-1]);
        }
    }
    return output
}
console.log (fibGenerator("b"))