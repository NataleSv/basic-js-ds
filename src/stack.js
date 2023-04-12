const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
function Stack() {
  this.size = 0;
  this.data = {};
  this.pop = pop;
  this.push = push;
  this.peek = peek;
}

function push(elem) {
  this.data[this.size] = elem;
  this.size++;
}

function pop() {
  if (this.size === 0) {
    return undefined;
  }
  this.size--;
  let resultPop = this.data[this.size];
  delete this.data[this.size];
  return resultPop;
}

function peek() {
  return this.data[this.size - 1];

}

module.exports = {
  Stack
};
