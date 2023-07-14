const kim = {
  nid: 3,
  addr: 'Pusan',
  oo: { id: 1, name: "Hong", addr: { city: 'Seoul' } },
};

function deepCopy(object) {
  let clone = {};

  Object.keys(object).forEach( key => typeof object[key] === 'object' 
    ? clone[key] = deepCopy(object[key]) 
    : clone[key] = object[key] );
  
  return clone;
}

const new_kim = deepCopy(kim);
console.log("new_kim>> ", new_kim);
console.log("kim>> ", kim);
new_kim.oo.id = 2;
console.log("new_kim>> ", new_kim);
console.log("kim>> ", kim);

console.log(new_kim.oo.id === kim.oo.id);