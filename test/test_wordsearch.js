const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if FRANK is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['F', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['A', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['A', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['N', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['K', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if SEINFELD is present HORIZONTALLY", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if VERTIGO is present VERTICALLY", function() {
    const result = wordSearch([
      ['B', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'A', 'M', 'N', 'F', 'V', 'L', 'D'],
      ['Y', 'F', 'R', 'A', 'Q', 'E', 'A', 'L'],
      ['H', 'M', 'J', 'R', 'N', 'R', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'T', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'I', 'O', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'G', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'O', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'VERTIGO')

    assert.isTrue(result);
  });

  it("should return true if MANGO is present DIAGONALLY", function() {
    const result = wordSearch([
      ['B', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'A', 'M', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'R', 'A', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'R', 'N', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'G', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'O', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'MANGO')

    assert.isTrue(result);
  });

  it("should return true if PRESENT is present REVERSED HORIZONTALLY", function() {
    const result = wordSearch([
      ['B', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'A', 'M', 'N', 'F', 'E', 'L', 'D'],
      ['T', 'N', 'E', 'S', 'E', 'R', 'P', 'L'],
      ['H', 'M', 'J', 'R', 'N', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'G', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'O', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'PRESENT')

    assert.isTrue(result);
  });

  it("should return true if GHOST is present REVERSED VERTICALLY", function() {
    const result = wordSearch([
      ['B', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'A', 'M', 'N', 'F', 'E', 'L', 'D'],
      ['T', 'N', 'E', 'S', 'E', 'R', 'P', 'L'],
      ['H', 'M', 'T', 'R', 'N', 'V', 'R', 'G'],
      ['W', 'H', 'S', 'S', 'Y', 'G', 'R', 'L'],
      ['B', 'F', 'O', 'E', 'N', 'E', 'O', 'B'],
      ['U', 'B', 'H', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'G', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'GHOST')

    assert.isTrue(result);
  });

  it("should return true if ASPRIN is present REVERSED DIAGONALLY", function() {
    const result = wordSearch([
      ['B', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'A', 'M', 'N', 'F', 'E', 'L', 'D'],
      ['T', 'N', 'E', 'S', 'E', 'R', 'P', 'L'],
      ['H', 'N', 'T', 'R', 'N', 'V', 'R', 'G'],
      ['W', 'H', 'I', 'S', 'Y', 'G', 'R', 'L'],
      ['B', 'F', 'O', 'R', 'N', 'E', 'O', 'B'],
      ['U', 'B', 'H', 'W', 'P', 'P', 'A', 'I'],
      ['O', 'D', 'G', 'A', 'K', 'S', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ASPRIN')

    assert.isTrue(result);
  });

});
