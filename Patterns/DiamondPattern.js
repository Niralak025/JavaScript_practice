//class function
function diamondPattern() {
    let pattern = '';
    for (let row = 0; row < (5 * 2) -1; row++) {
        for (let column = 0; column < 5; column++) {
            if (row + column < 4) {
                pattern = pattern + ' '
            }
            else if(row > 4 && row ){
                pattern = pattern + '- '
            }
            else {
                pattern = pattern + '* '
            }
        }
        pattern = pattern + '\n'
    }
    console.log(pattern)
}

diamondPattern()