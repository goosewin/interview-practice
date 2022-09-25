function codesweeper(field: boolean[][], x: number, y: number) {
    const height = field.length;
    const width = field[0].length;

    let result = Array.from(Array(height), () => new Array(width));

    let mines = 0;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {

            mines = 0;
            if (i > 0) {
                if (field[i - 1][j - 1]) mines += 1;
                if (field[i - 1][j]) mines += 1;
                if (field[i - 1][j + 1]) mines += 1;
            }

            if (i < height - 1) {
                if (field[i + 1][j - 1]) mines += 1;
                if (field[i + 1][j]) mines += 1;
                if (field[i + 1][j + 1]) mines += 1;
            }

            if (field[i][j - 1]) mines += 1;
            if (field[i][j + 1]) mines += 1;

            result[i][j] = mines;
        }
    }

    return result;
}
