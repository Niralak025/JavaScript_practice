//class function
function rhombusPattern() {
    let pattern = '';
    for (let row = 0; row < 6; row++) {
        for (let column = 0; column < 9; column++) {
            if (row == column || column < row + 4 && !(column < row)) {
                pattern = pattern + ' * '
            }
            else {
                pattern = pattern + '   '
            }
        }
        pattern = pattern + '\n'
    }
    console.log(pattern)
}

rhombusPattern()