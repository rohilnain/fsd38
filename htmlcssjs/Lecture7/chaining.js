const users = [
    {
      firstName: "Anshika",
      lastName: "Agarwal",
      age: "23",
    },
    {
      firstName: "Ankit",
      lastName: "Agarwal",
      age: "33",
    },
    {
      firstName: "Syed",
      lastName: "Israr",
      age: "19",
    },
    {
      firstName: "Aditya",
      lastName: "Jiwane",
      age: "21",
    },
    {
      firstName: "Naveen",
      lastName: "Agarwal",
      age: "25",
    },
  ];

// Print firstnames of all users whose age is greater than or equal to 25
var A=users.filter(element=>element.age>=25);
var B=A.map(element=>element.firstName);
console.log(B);
//so this can be writing in continuous form so thats why chaining of hof
var C=users.filter((user)=>user.age>=25)
      .map((user)=>user.firstName);
console.log(C);
