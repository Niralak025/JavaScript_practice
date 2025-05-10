//Arrow function
const rightHalfPyramid = () => {
    let pattern = '';
    for (let row = 0; row < 5; row++) {
        for (let column = 0; column < row + 1; column++) {
            pattern = pattern + '* '
        }
        pattern = pattern + '\n'
    }
    console.log(pattern);
}

rightHalfPyramid();