const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let expected = [];

  for (const person in people) {
    greeting += people[person];
    expected.push(greeting);
    greeting = 'Hello ';
  }
  return expected;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);