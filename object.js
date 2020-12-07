let person = {
  firstName: "Micheal",
  lastName: "David",
  age: 26,
  job: "IT",
  married: false,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  language: ["English", "Spanish", "French"],
  cars: [
    {
      model: "BMV",
      color: "Black",
      seat: 4,
    },
    {
      model: "Ford",
      color: "Red",
      seat: 7,
    },
  ],
};

person.age = 40;

console.log(person.age);
