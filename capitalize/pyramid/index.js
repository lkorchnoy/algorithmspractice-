//pyramid(1) N=1
//       '#'
//   pyramid(2) N=2
//       ' # '
//       '###'
//   pyramid(3) N=3
//       '  #  '
//       ' ### '
//       '#####'
//Math.floor() function returns the largest integer less than or equal to a given number.
//console.log(Math.floor(5.95));
// expected output: 5
//
//console.log(Math.floor(-5.05));
// expected output: -6

function pyramid(n) {
    const midPoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midPoint - row <= column && midPoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

module.exports = pyramid;
