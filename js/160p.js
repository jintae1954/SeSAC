/**
 * Part 1. Collection 클래스를 상속 받아 List 메소드들과
 *  클래스 메소드 arrayToList, listToArray를 보유한 ArrayList 클래스를 구현하시오.
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

  has(val) {
    return this.#arr.indexOf(val) !== -1;
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  *[Symbol.iterator]() {
    for (let i = 0; i <= this.length - 1; i++) {
      yield this.arr[i];
    }
  }

  print() {
    console.log(this.constructor.name, this.#arr);
  }
}

class ArrayList extends Collection {
  get size() {
    return this.length;
  }

  get(idx) {
    return this.arr[idx];
  }

  set(idx, val) {
    return (this.arr[idx] = val);
  }

  add(val, idx) {
    idx = idx ?? this.length;
    this.arr.splice(idx, 0, val);
  }

  remove(val) {
    const idx = this.arr.indexOf(val);
    this.arr.splice(idx, 1);
  }

  contains(val) {
    return this.has(val);
  }

  arrayToList() {
    let node; // 초기값 undefined
    for (let i = this.arr.length - 1; i >= 0; i -= 1) {
      node = { value: this.arr[i], rest: node };
    }

    return node;
  }

  listToArray(list) {
    const arr = [];
    let node = list;
    while (true) {
      arr.push(node.value);
      node = node?.rest;

      if (!node) break;
    }

    return arr;
  }

  print() {
    console.log(
      this.constructor.name,
      `(${this.length})\n`,
      JSON.stringify(this.arrayToList(), null, '  ')
    );
  }
}

const alist = new ArrayList(1, 2, 3);
alist.print();

const lst = alist.arrayToList();
console.log('🚀  lst:', lst);

const arr = alist.listToArray(lst);
console.log('🚀  arr:', arr);

alist.remove(2);
alist.print();

alist.add(4);
alist.print();

alist.add(22, 1);
alist.print();

alist.set(1, 300);
alist.print();

console.log(alist.iterator().next());
for (const a of alist) {
  console.log(a);
}

alist.clear();
console.log('alist.isEmpty>>', alist.isEmpty);
