const { transpose } = require("../matrix-transposition");

const wordSearch = (letters, word) => {
    let horizontalJoin = letters.map(ls => ls.join('')) // Joins each "Row" of the letters matrix into a string, and maps those strings to a new array.
    let horizontalReversed = reverseArray(horizontalJoin);

    let verticalJoin = transpose(letters);
    verticalJoin = verticalJoin.map(ls => ls.join('')) // Joins each "Row" of the transposed matrix into a string, and maps those strings to a new array.
    let verticalReversed = reverseArray(verticalJoin);

    let diagonalJoin = transposeDiagonal(letters);
    diagonalJoin = diagonalJoin.map(ls => ls.join('')); // Joins each "Row" of the transposed matrix into a string, and maps those strings to a new array.
    let diagonalReverse = reverseArray(diagonalJoin);

    // Concat all arrays into one
    let masterArray = horizontalJoin.concat(verticalJoin)
        .concat(diagonalJoin)
        .concat(horizontalReversed)
        .concat(verticalReversed)
        .concat(diagonalReverse);
    
    // Check if the master array contains the word
    for (l of masterArray) {
        if (l.includes(word)) {
            return true;
        }
    }
    
    return false;
}

const reverseArray = function (array) {
    let reversedArray = array.map((element) => element.split("").reverse().join(""));
    return reversedArray;
};


// Returns a matrix of values grabbed diagonally from the given matrix
const transposeDiagonal = function(letters) {
    let newMatrix = [];
    // Make diagonal matrix, starting with the colums.
    for(let c = 0; c < letters[0].length; c++) {
        let tempArray = [];
        for(let x = 0; x < letters[0].length - c; x++) {
            let y = c + x
            tempArray.push(letters[x][y]);
        }
        
        newMatrix.push(tempArray)
    }

    // Make diagonal matrix, ROW.
    for(let r = 1; r < letters.length; r++) {
        let tempArray = [];
        for(let y = 0; y < letters.length - r; y++) {
            let x = r + y
            tempArray.push(letters[x][y]);
        }
        
        newMatrix.push(tempArray)
    }

    return newMatrix;
};

module.exports = wordSearch