// input 
// nums = [2,7,11,15]
// target = 9

// output
// [0,1]

const twoSum = (nums, target) => {
    let indices = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                indices.push(i)
                indices.push(j)
            }
        }
    }
    return indices
}

const twoSumOptmisedCode = (nums, target) => {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
    return [];
}


let num = [2, 7, 11, 15]
let target = 26

// console.log(twoSum(num, target))

console.log(twoSumOptmisedCode(num, target))
