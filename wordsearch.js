const { transpose } = require("../matrix-transposition");

const wordSearch = (letters, word) => { 
    let horizontalJoin = letters.map(ls => ls.join(''))

    let verticalJoin = transpose(letters);
    verticalJoin = verticalJoin.map(ls => ls.join(''))
    
    let diagonalJoin = transposeDiagonal(letters);
    diagonalJoin = diagonalJoin.map(ls => ls.join(''))

    let masterArray = horizontalJoin.concat(verticalJoin).concat(diagonalJoin);
    
    for (l of masterArray) {
        if (l.includes(word)) {
            return true;
        }
    }
    
    return false;
}

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