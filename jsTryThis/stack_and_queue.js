/**
 * Part 1. class와 Array를 사용하여 Stack, Queue를 구현하시오.
 *
 * Part 2. Stack과 Queue에 공통 기능을 확장하시오.
 *  - 공통: clear(), toArray(), print(), isEmpty, peek, poll, remove, length
 *  - peek: 가장 나중 또는 먼저 들어간 요소 반환 (요소 삭제 없음)
 *  - poll: 가장 나중 또는 먼저 들어간 요소 반환 후 삭제 (Stack.pop, Queue.dequeue)
 *  - remove: 가장 나중 또는 먼저 들어간 요소 삭제
 */
class collection {
  #array;
  getArray() {
    return this.#array;
  }
  clear() {
    return new Array();
  }
  toArray() {
    
  }
  print() {

  }
  isEmpty: {

  }
  peek: {

  }
  poll: {

  }
  remove: {

  }
  length: {

  }
}

class Stack extends collection{
  constructor(array = []) {
    super.getArray() = [...array];
  }
  push(value) {
    super.getArray().#array = [...super.getArray().#array, value];
  }
  pop() {
    return super.getArray().#array.pop();
  }
}

class Queue extends collection {
  constructor(array = []) {
    super.getArray().#array = [...array];
  }
  enqueue(value) {
    super.getArray().#array = [...super.getArray().#array, value];
  }
  dequeue() {
    return super.getArray().#array.shift();
  }
}

const stack = new Stack([2,3]); // or new Stack([1,2]); // (1,2)
stack.push(4); // 추가하기
stack.print();
console.log(stack.pop()); // LIFO
stack.print();

const queue = new Queue([1,2]);
queue.enqueue(3); // 추가하기
queue.print();
console.log(queue.dequeue()); // FIFO
queue.print();


console.log(stack.peek, queue.peek); // 마지막 원소
queue.print(); // 출력
const arr = queue.toArray().map(a => console.log(a));

if(!stack.isEmpty) stack.clear();
if(queue.length) queue.clear();