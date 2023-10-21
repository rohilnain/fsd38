var user = {
    firstName: "Rohil",
    lastName: "Nain",
    snack: "Almonds",
    printName: function () {
      //console.log("anshika......");
      //console.log(`${this.firstName} ${this.lastName}`); //Anshika Agarwal
      var fullName = `${this.firstName} ${this.lastName}`;
      //this above representation is a template literal
      //it concatinates the string
      return fullName;
    },
    getName: () => {
      console.log(this); // global object
      //both of below are same
      console.log(this.firstName + " " + this.lastName); // undefined undefined
      console.log(`${this.firstName} ${this.lastName}`); // template literals
    },
  };
  console.log("print name",user.printName());
  //output will be Rohil Nain

  user.getName();
//   {} , for this in arrow function it takes global scope not object scope
// undefined undefined (thats why they are undefined)
// undefined undefined
  

//bind,call and apply

// Bind method:
// The bind method is used to create a new function that, when called, has its this keyword set to the provided value.
// It does not immediately execute the function.

var car = {
    brand: 'Toyota',
    displayDetails: function (color, year) {
      console.log(`Brand: ${this.brand}, Color: ${color}, Year: ${year}`);
    }
  };
  
  var carDetails1 = car.displayDetails.bind(car, 'blue', 2022);
  carDetails1(); // Brand: Toyota, Color: blue, Year: 2022

  var carDetails2 = car.displayDetails.bind(car, 'red', 1960);
  carDetails2(); // Brand: Toyota, Color: blue, Year: 2022

  //so you can see we are using car object function display details in various functions
  //here function binding the car object function displaydetails
var displayName=function(){
    console.log(this.printName()+" is cool");
  };
var printNameBind=displayName.bind(user);
printNameBind();

var displayName2=user.printName.bind(user);
displayName2();


//likewise we can use call method
displayName.call(user);

//same way apply
displayName.apply(user);

// printNameBind is a new function that is bound to the user object. When you call printNameBind(), 
// it will execute with this referring to the user object.
// It doesn't immediately execute the function but instead 
// returns a new function with the context of this permanently bound to the object passed as an argument.

// The call and apply methods on displayName are used to directly invoke the displayName function 
// with the this context set to the user object.


  
  