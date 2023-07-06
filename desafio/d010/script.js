class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
  };

  speak() {
    console.log(`My name is ${this.firstName} ${this.lastName} tenho ${this.age} anos`)
  }
}

const person = new Person("Miguel", "Braga", 18)
// console.log(person)
person.speak()