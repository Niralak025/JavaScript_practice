// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const findLongestCommonPrefix = function(strs) {

    console.log("strs=-=-=-",strs);
    strs.forEach(element => {

        console.log("element===",element);
        for(let index = 0; index < element.length; index++){
            if(element[index])
            console.log("element===",element[index]);
        }
        
        
    });
    

    
};

let strs = ["flower","flow","flight"]

findLongestCommonPrefix(strs)