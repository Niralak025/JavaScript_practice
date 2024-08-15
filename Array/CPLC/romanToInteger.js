// Input: s = "LVIII"
// Output: 58

const romanIntegerCollection = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

const convertRomanToInteger = (romanValue) => {
    let number = 0;
    for(let index = 0; index < romanValue.length; index++){
        if(romanValue[index] == romanIntegerCollection.I){

        }
        console.log("===",romanValue[index]);
        
    }
    


}

let str = "LVIII";
convertRomanToInteger(str)




