//Reverse String
// nirala = alarin
//Reverse string using for loop
const reverseStringWithForLoop = (str) => {
    let reverseString = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString = reverseString + str[i]
    }
    console.log("reverseString========" + reverseString);
}

// reverseStringWithForLoop("Nirala")

const reverseStringWithInBuiltFunction = (str) => {
    let reverseString = str.split("").reverse().join("")
    console.log("reverseString========" + reverseString);
}

//Reverse string using Inbuilt functions
reverseStringWithInBuiltFunction("Hello")

