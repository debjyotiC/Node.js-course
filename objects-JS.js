const person ={
  name: 'Max',
  age: 29,
  greet(){ // object method
      console.log('Hi, I am ' + this.name)}
};
const hobbies = ['Sports', 'Cooking'];

console.log(hobbies.map(hobby => 'Hobbie: ' + hobby));