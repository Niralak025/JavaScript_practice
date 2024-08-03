let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9] //think as whole tarifflist
let array2 = [2, 3, 4] //think as only 5G tariff
let active = 3 //think as active tariff

console.log("array1====", array1);
console.log("array2====", array2);

console.log("typeof array1====", typeof array1);

//using forEach
function printArray(array1) {
    var commanElement = []
    var notCommanElement = []
    var presentElement = []
    var isPresent = array2.includes(active)
    if (isPresent) {
        presentElement = array2
    }
    array1.forEach(element => {
        if (array2.includes(element)) {
            // push only those value which is in array2
            // console.log("includes element====",element);
            commanElement.push(element)
        }
        else {
            // push remaing value except which is in array2
            notCommanElement.push(element)
        }
    });
    console.log("commanElement=====", commanElement);
    console.log("notCommanElement=====", notCommanElement);
    console.log("presentElement====", presentElement);
}

printArray(array1)

