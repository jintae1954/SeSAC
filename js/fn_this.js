/**
 * Part 1.
 * 
 */
const expressFn = function(name) {
  this.name = name;
  console.log(this, new.target, this.name, name);
};
const arrowFn = (name) => {
  this.name = name;
  console.log(this, new.target, this.name, name);
};

expressFn('expfn');
arrowFn('afn');

/**
 * Part 2.
 */
console.log('-'.repeat(10));

const Dog = function(name) {
  console.log(this, new.target, this instanceof Dog, this.name);
  this.name = name;
  this.bark = function() {
    console.log('bark= ', new.target, this.name, name);
  }
  this.bark2 = () => {
    console.log('bark2= ', new.target, this.name, name);
  }
};

const dog = Dog('Doggy');
const lucy = new Dog('Lucy');