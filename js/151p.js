/**
 * Part 1. class와 Array를 사용하여 Stack, Queue를 구현하시오.
 *
 * Part 2. Stack과 Queue에 공통 기능을 확장하시오.
 *  - 공통: clear(), toArray(), print(), remove(), isEmpty, peek, poll, length
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
    // return !this.#arr?.length;
    return this.#arr.length === 0 ? true : false;
  }

  get arr() {
    return this.#arr;
  }

  remove() {
    if (this.constructor.name === 'Stack') {
      this.#arr.pop();
    }
    if (this.constructor.name === 'Queue') {
      this.#arr.shift();
    }
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

  [Symbol.iterator]() {
    let idx = this.length - 1;
    return {
      next: () => {
        if (idx < 0) return { done: true };
        return { value: this.arr[idx--], done: false };
      },
    };
  }
}

class Queue extends Collection {
  enqueue(item) {
    return this.arr.push(item);
  }

  dequeue() {
    return this.arr.shift();
  }

  [Symbol.iterator]() {
    let idx = 0;
    return {
      next: () => {
        if (idx >= this.length) return { done: true };
        return { value: this.arr[idx++], done: false };
      },
    };
  }
}

// new Stack, push(), pop(), print()
const stack = new Stack([2, 3]); // or new Stack(1,2)
stack.push(4);
console.log(stack.pop());
stack.print();
console.log('\n');

// new Queue, push(), pop(), print()
const queue = new Queue([1, 2]);
queue.enqueue(3);
console.log(queue.dequeue());
queue.print();
console.log('\n');

// peek
const peekStack = stack.peek;
const peekQueue = queue.peek;
console.log('🚀 ~ peekStack:', peekStack);
console.log('🚀 ~ peekQueue:', peekQueue);
console.log('\n');

// toArray()
const arr = queue.toArray().map(a => (console.log(a), a));
console.log('🚀 ~ arr:', arr);
console.log('\n');

// iterable
stack.print();
for (const a of stack) {
  console.log(a);
}
queue.print();
for (const a of queue) {
  console.log(a);
}
console.log('\n');

// [Symbol.iterator]()
const iterStack = stack[Symbol.iterator]();
const iterQueue = queue[Symbol.iterator]();
console.log('🚀 ~ iterStack:', iterStack.next());
console.log('🚀 ~ iterStack:', iterStack.next());
console.log('🚀 ~ iterStack:', iterStack.next());
console.log('🚀 ~ iterQueue:', iterQueue.next());
console.log('🚀 ~ iterQueue:', iterQueue.next());
console.log('🚀 ~ iterQueue:', iterQueue.next());
console.log('\n');

// isEmpty
if (!stack.isEmpty) {
  stack.remove();
  stack.print();
  stack.clear();
  stack.print();
}
if (queue.length) {
  queue.remove();
  queue.print();
  queue.clear();
  queue.print();
}
