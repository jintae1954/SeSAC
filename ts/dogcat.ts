class Animal {
  #name;
  constructor(name: string) {
    this.#name = name;
  }

  bark() {
    console.log('Animal.bark()');
  }
  getName() {
    return this.#name;
  }
}

class BaseAnimal extends Animal {
  private ani: Animal;

  constructor(aniOrName: string | Animal) {
    if (typeof aniOrName === 'string') {
      console.log('if');
      super(aniOrName);
      this.ani = new Animal(aniOrName);
      console.log(this.ani.getName());
    } else {
      console.log('else');
      super(aniOrName.getName());
      this.ani = aniOrName;
      console.log(this.ani.getName());
    }
  }

  bark(): void {
    console.log('BaseAnimal.bark()', this.ani);
    this.ani.bark();
  }
}

class Dog extends BaseAnimal {
  bark() {
    console.log('Dog.bark()');
    super.bark();
    console.log('멍멍');
  }
}

class Cat extends BaseAnimal {
  bark() {
    console.log('Cat.bark()');
    super.bark();
    console.log('야옹~');
  }
}

/**
 * Dog.bark() -> Base.bark() -> Ani.bark() -> Cat.bark() -> Base.bark() -> Ani.bark() -> Ani.bark() -> 야옹 -> 멍멍
 */

const x = new Dog(new Cat('개냥이'));
x.bark();

// const y = new Cat(new Dog('개냥이'));
// y.bark();

// const z = new Dog('개');
// z.bark();
