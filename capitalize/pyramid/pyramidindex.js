function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

        if (level.length === 2 * n - 1) {
            console.log(level);
            return pyramid(n, row + 1);

        }

        let add;
        const midPoint = Math.floor((2 * n - 1) / 2);
        if (midPoint - row <= level.length && midPoint + row >= level.length) {
            add = '#';
        } else {
            add = ' ';
        }
    pyramid(n, row, level + add);
}


module.exports = pyramid;