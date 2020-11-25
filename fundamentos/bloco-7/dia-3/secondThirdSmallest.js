const assert = require('assert');

const secondThirdSmallest = (array) => {
  const results = []
  array.sort((item1, item2) => {
    return item1 - item2;
  });
  results.push(array[1], array[2]);
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result);