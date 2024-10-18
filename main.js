// Description
// Write a function called 'createCounter' that returns an object with two methods: 'increment' and 'decrement'.
// Both methods should modify a private 'count' variable, and return the current count when called.
// The catch: You must ensure the variable remains private using closure.
// For example:

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1

function createCounter() {
  let count = 0;

  let increment = () => {
    count += 1;
    return count;
  }
  let decrment = () => {
    count -= 1;
    return count;
  };

  return { increment, decrement };
}
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
// Hint: Use a closure to maintain the state of count.
// Open your console and console log your counter to see its status, i.e. -> console.log('counter status: ', counter.increment())
