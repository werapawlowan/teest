// Using object literal notation to define an object
var bobj = {
    // Properties of the object
    name: "Bob",
    age: 30,
    email: "bob@example.com",
    // Method of the object
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};

// Accessing properties and invoking the method
console.log(bobj.name); // Output: "Bob"
bobj.greet(); // Output: "Hello, my name is Bob and I am 30 years old."
