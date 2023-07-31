/**
 * Part 1. class와 Array를 사용하여 Stack, Queue를 구현하시오.
 *
 * Part 2. Stack과 Queue에 공통 기능을 확장하시오.
 *  - 공통: clear(), toArray(), print(), isEmpty, peek, poll, remove, length
 *  - peek: 가장 나중 또는 먼저 들어간 요소 반환 (요소 삭제 없음)
 *  - poll: 가장 나중 또는 먼저 들어간 요소 반환 후 삭제 (Stack.pop, Queue.dequeue)
 *  - remove: 가장 나중 또는 먼저 들어간 요소 삭제
 */

class Collection {
  #arr;
  constructor(...args) {
    Array.isArray(args[0]) ? (this.#arr = args[0]) : (this.#arr = args);
  }
  get length() {
    return this.#arr.length;
  }
  get isEmpty() {
    return this.#arr.length === 0 ? true : false;
  }
  get arr() {
    return this.#arr;
  }
  get peek() {
    if (this.constructor.name === 'Stack')
      return this.#arr.slice(this.#arr.length - 1);
    if (this.constructor.name === 'Queue') return this.#arr.slice(0, 1);
  }
  get poll() {
    if (this.constructor.name === 'Stack') return this.#arr.pop();
    if (this.constructor.name === 'Queue') return this.#arr.shift();
  }
  clear() {
    this.#arr = [];
  }
  toArray() {
    return [...this.#arr];
  }
  print() {
    console.log(this.constructor.name, this.#arr);
  }
}

class Stack extends Collection {
  push(item) {
    return this.arr.push(item);
  }
  pop() {
    return this.arr.pop();
  }
}

class Queue extends Collection {
  enqueue(item) {
    return this.arr.push(item);
  }
  dequeue() {
    return this.arr.shift();
  }
}

const stack = new Stack([2, 3]); // or new Stack([1,2]); // (1,2)
stack.push(4); // 추가하기
stack.print();
console.log(stack.pop()); // LIFO
stack.print();

const queue = new Queue([1, 2]);
queue.enqueue(3); // 추가하기
queue.print();
console.log(queue.dequeue()); // FIFO
queue.print();

console.log(stack.peek, queue.peek); // 마지막 원소
queue.print(); // 출력
const arr = queue.toArray().map(a => console.log(a));

console.log('stack.length', stack.length);
console.log('queue.length', queue.length);
console.log('stack.isEmpty', stack.isEmpty);
console.log('queue.isEmpty', queue.isEmpty);

if (!stack.isEmpty) {
  stack.clear();
  stack.print();
}
if (queue.length) {
  queue.clear();
  queue.print();
}
