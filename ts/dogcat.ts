class Animal {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log('멍멍');
  }
}

class Cat extends Animal {
  bark() {
    console.log('야옹');
  }
}
