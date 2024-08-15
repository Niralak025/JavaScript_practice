// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

const plusOne = (digits) => {
    let convertToNumber = Number(digits.join("")) + 1;
    // for (let index = 0; index < digits.length; index++) {
    //     convertToNumber = convertToNumber + digits[index]
    // }
    let newConvertedArray = Array.from(convertToNumber.toString())
    return newConvertedArray;
}

let numbers = [1, 2, 3]
console.log(plusOne(numbers));