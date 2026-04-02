/**
 * 手写实现 new 操作符
 * @param {Function} constructor 构造函数
 * @param  {...any} args 传递给构造函数的参数
 */

function myNew(constructor, ...args) {
  // ...
}

/**
 * 要点提示：
 * 1. 创建一个新的对象，并将其原型指向构造函数的 prototype 属性。
 * 2. 使用 apply 或 call 方法将构造函数的 this 指向新创建的对象，并传递参数。
 * 3. 如果构造函数返回一个对象，则返回该对象；否则，返回新创建的对象。
 */

// 参考实现
function myNew(constructor, ...args) {
  // Object.create在创建对象的同时设置原型
  const obj = Object.create(constructor.prototype);
  // 在新对象上调用构造函数，确保this指向正确
  const retObj = constructor.call(obj, ...args);
  // 或使用retObj instanceof Object来判断返回值是否为对象
  return retObj !== null && typeof retObj === "object" ? retObj : obj;
}

// 测试用例
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = myNew(Person, "Alice", 30);
console.log(person1.name);
console.log(person1.age);
console.log(person1 instanceof Person);
const person2 = new Person("Bob", 25);
console.log(person2.name);
console.log(person2.age);
console.log(person2 instanceof Person);

console.log("-----");

// 复杂测试用例：构造函数返回一个对象
function Car(make, model) {
  this.make = make;
  this.model = model;
  return { make: "Override", model: "Override" };
}
const car1 = myNew(Car, "Toyota", "Corolla");
console.log(car1.make);
console.log(car1.model);
console.log(car1 instanceof Car);
const car2 = new Car("Honda", "Civic");
console.log(car2.make);
console.log(car2.model);
console.log(car2 instanceof Car);
