

function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this,username)// this is used to hold the value of it's parent function
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);



/*---------------------------------------------------------------------------------------*/


const person = {
    name: 'Charlie',
    sayHello: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

const animal = {
    name: 'Max'
};

person.sayHello(); // Output: Hello, I'm Charlie
person.sayHello.call(animal); // Output: Hello, I'm Max

/*---------------------------------------------------------------------------------------*/

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

const apple = new Food('Apple', 1.5);
console.log(apple);
// Output: { name: 'Apple', price: 1.5, category: 'food' }
