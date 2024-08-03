// print even and odd numbers between 1 to given number

const printEvenAndOddNumbersSeries = (number) => {
    let evenNumbers = []
    let oddNumbers = []
    for (let i = 1; i <= number; i++) {
        if (i % 2 == 0) {
            evenNumbers.push(i)
        }
        else {
            oddNumbers.push(i)
        }
    }
    console.log("evenNumbers=======", evenNumbers);
    console.log("oddNumbers=======", oddNumbers);
}
printEvenAndOddNumbersSeries(10)