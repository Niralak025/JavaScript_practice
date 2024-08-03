var arr1 = [1, 2, 3, 4, 5, 6]

const reverseArrayElement = (arr) => {
    var newArray = []
    for (let index = arr.length - 1; index >= 0; index--) {
        newArray.push(arr[index])
    }
    return newArray
}

console.log("reverse element of Array == ", reverseArrayElement(arr1));