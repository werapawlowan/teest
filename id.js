function createUserData(user) {
  return {
    name: user._name,
    age: user._age,
  };
}

const user = {
  _name: "Bob",
  _age: 30,
};

const userData = createUserData(user);

console.log(userData); // { name: 'Bob', age: 30 }
