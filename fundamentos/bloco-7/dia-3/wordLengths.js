const assert = require('assert');

const wordLengths = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i += 1) {
    output.push(arr[i].length);
  }
  return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);