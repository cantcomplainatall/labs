var a = 10;
console.log(a);
let b = 20;
console.log(b);
const c = 30;
console.log(c);


function testScope() {
    var x = 5;
    let y = 10;
    const z = 15;

    console.log(x);
    console.log(y);
    console.log(z);
}

testScope();

console.log(5 + "5");
console.log("5" - 2);
console.log(true + false);
console.log(null + 1);
console.log(undefined + 1);
console.log(0 == false);
console.log(0 === false);

var person = {
    name: "John",
    age: 30
};

person.age = 31;
person.city = "New York";
console.log(person);

person = { name: "Alice", age: 25 }; 