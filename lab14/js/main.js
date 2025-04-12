function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Привіт, я ${this.name}, мені ${this.age} років.`);
};

function Employee(name, age, jobTitle) {
    Person.call(this, name, age); 
    this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.describeJob = function() {
    console.log(`${this.name} працює як ${this.jobTitle}.`);
};

const john = new Employee("John", 30, "Software Developer");
john.greet(); 
john.describeJob();

// Клас Product
function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

Product.prototype.getInfo = function() {
    console.log(`Товар: ${this.name}, ціна: ${this.price} грн, категорія: ${this.category}`);
};

function User(name) {
    this.name = name;
}

User.prototype.getUserInfo = function() {
    console.log(`Ім'я користувача: ${this.name}`);
};

function Customer(name) {
    User.call(this, name);
    this.orders = [];
}

Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.viewOrders = function() {
    if (this.orders.length === 0) {
        console.log(`${this.name} ще не має замовлень.`);
    } else {
        console.log(`${this.name} має наступні замовлення:`);
        this.orders.forEach((order, index) => {
            console.log(`Замовлення ${index + 1}:`);
            order.viewOrder();
        });
    }
};

Customer.prototype.addOrder = function(order) {
    this.orders.push(order);
};

function Order() {
    this.products = [];
    this.totalPrice = 0;
}

Order.prototype.addProduct = function(product) {
    this.products.push(product);
    this.totalPrice += product.price;
};

Order.prototype.viewOrder = function() {
    console.log("Товари в замовленні:");
    this.products.forEach(product => {
        product.getInfo();
    });
    console.log(`Загальна вартість: ${this.totalPrice} грн`);
};

const product1 = new Product("Мишка", 500, "Комп'ютерна техніка");
const product2 = new Product("Клавіатура", 1000, "Комп'ютерна техніка");

const customer1 = new Customer("Марія");

const order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);

customer1.addOrder(order1);

customer1.viewOrders();
