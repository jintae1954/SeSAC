class Animal {
  #name;
  constructor(name: string) {
    this.#name = name;
  }

  bark() {}
  getName() {
    return this.#name;
  }
}

class BaseAnimal extends Animal {
  private ani: Animal;

  constructor(aniOrName: string | Animal) {
    if (typeof aniOrName === 'string') {
      super(aniOrName);
      this.ani = new Animal(aniOrName);
    } else {
      super(aniOrName.getName());
      this.ani = aniOrName;
    }
  }

  bark(): void {
    super.bark();
    this.ani.bark();
  }
}

class Dog extends BaseAnimal {
  bark() {
    super.bark();
    console.log('멍멍');
  }
}

class Cat extends BaseAnimal {
  bark() {
    super.bark();
    console.log('야옹~');
  }
}

const x = new Dog(new Cat('개냥이'));
const y = new Cat(new Dog('개냥이'));
const z = new Dog('개');

x.bark();
y.bark();
z.bark();
