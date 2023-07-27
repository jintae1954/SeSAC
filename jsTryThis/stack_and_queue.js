/**
 * Part 1. class와 Array를 사용하여 Stack을 구현하시오.
 */
class Stack {
  #array;
  constructor(array = []) {
    this.#array = [...array];
  }

  push(value) {
    this.#array = [...this.#array, value];
  }

  pop() {
    return this.#array.pop();
  }

  print() {
    console.log(this.#array);
  }
}

const stack = new Stack([2,3]); // or new Stack([1,2]); // (1,2)
stack.push(4); // 추가하기
stack.print();
console.log(stack.pop()); // LIFO
stack.print();

/**
 * Part 2. class와 Array를 사용하여 Queue를 구현하시오.
 */
class Queue {
  #array;
  constructor(array = []) {
    this.#array = [...array];
  }

  enqueue(value) {
    this.#array = [...this.#array, value];
  }

  dequeue() {
    return this.#array.shift();
  }

  print() {
    console.log(this.#array);
  }
}

const queue = new Queue([1,2]);
queue.enqueue(3); // 추가하기
queue.print();
console.log(queue.dequeue()); // FIFO
queue.print();