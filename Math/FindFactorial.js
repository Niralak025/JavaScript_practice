// find factorial using while loop 5! = 120
// 4! = 24 :- 4x3x2x1
// 3! = 6  :- 3x2x1
// 0! = 1

const findFactorialWithWhileLoop = (number) => {
    let factorialResult = 1;
    if (number == 1 || number == 0) {
        factorialResult = 1;

    }
    else {
        while (number > 1) {
            factorialResult = factorialResult * (number)
            number--;
        }
    }
    console.log("factorialResult=====", factorialResult);
}
// findFactorialWithWhileLoop(0) // 1
// findFactorialWithWhileLoop(5) // 120
// findFactorialWithWhileLoop(4) // 24

const findFactorialWithForLoop = (number) => {
    let factorialResult = 1;
    if (number == 1 || number == 0) {
        factorialResult = 1;
    }
    else {
        for (let fact = number; fact > 1; fact--) {
            factorialResult = factorialResult * fact
        }
    }
    console.log("factorialResult=====", factorialResult);
}
findFactorialWithForLoop(4)
findFactorialWithForLoop(5)