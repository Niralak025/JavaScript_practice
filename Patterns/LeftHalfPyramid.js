//class function
function leftHalfPyramid() {
    let pattern = '';
    for (let row = 0; row < 6; row++) {
        for (let column = 0; column < 6; column++) {
            if (row + column < 5) {
                pattern = pattern + '  '
            }
            else {
                pattern = pattern + '* '
            }
        }
        pattern = pattern + '\n'
    }
    console.log(pattern)
}

leftHalfPyramid()