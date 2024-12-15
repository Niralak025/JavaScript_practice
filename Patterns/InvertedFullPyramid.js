//class function
function invertedFullPyramid() {
    let pattern = '';
    for (let row = 0; row < 5; row++) {
        for (let column = 0; column < 5; column++) {
            if (column < row) {
                pattern = pattern + ' '
            }
            else {
                pattern = pattern + ' * '
            }
        }
        pattern = pattern + '\n'
    }
    console.log(pattern)
}

invertedFullPyramid()