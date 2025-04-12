class Product {
    constructor(name, price, category) {
      this.name = name;
      this.price = price;
      this.category = category;
    }
  
    getInfo() {
      return `${this.name} (${this.category}) - $${this.price}`;
    }
  }
  
  class User {
    constructor(name) {
      this.name = name;
    }
  
    getUserInfo() {
      return `User: ${this.name}`;
    }
  }
  
  class Order {
    constructor(products = []) {
      this.products = products;
      this.total = this.calculateTotal();
    }
  
    calculateTotal() {
      return this.products.reduce((sum, product) => sum + product.price, 0);
    }
  
    getOrderDetails() {
      const productList = this.products.map(p => p.getInfo()).join('\n');
      return `Order:\n${productList}\nTotal: $${this.total}`;
    }
  }
  
  class Customer extends User {
    constructor(name) {
      super(name);
      this.orders = [];
    }
  
    addOrder(order) {
      this.orders.push(order);
    }
  
    viewOrders() {
      if (this.orders.length === 0) {
        return `${this.name} has no orders.`;
      }
      return this.orders.map((order, index) => 
        `Order #${index + 1}:\n${order.getOrderDetails()}\n`
      ).join('\n');
    }
  }
  
  
  const product1 = new Product("Laptop", 1200, "Electronics");
  const product2 = new Product("Phone", 800, "Electronics");
  const product3 = new Product("Book", 25, "Books");
  
  const customer = new Customer("Alice");
  console.log(customer.getUserInfo());
  
  const order1 = new Order([product1, product3]);
  const order2 = new Order([product2]);
  
  customer.addOrder(order1);
  customer.addOrder(order2);
  
  console.log(customer.viewOrders());
  