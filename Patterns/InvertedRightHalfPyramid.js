//Arrow function
const invertedRightHalfPyramid = () => {
    let pattern = '';
    for (let row = 0; row < 5; row++) {
        for (let column = 0; column < 5 - row; column++) {
            pattern = pattern + '* '
        }
        pattern = pattern + '\n'
    }
    console.log(pattern);
}

invertedRightHalfPyramid();