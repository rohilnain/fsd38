// An object is a standalone entity, with properties and type. It is a collection of key-value pairs, 
// where each key is a string (or symbol) and each value can be anything, including other objects


// JavaScript objects are dynamic, meaning that new properties can be added to them at any time, and 
// existing properties can be modified or deleted. They serve as a fundamental building block for 
// creating complex data structures and are extensively used in JavaScript for various purposes, 
// including representing real-world entities, data modeling, and more.


//for eg lets make a blueprint for house 

const house={
    name:"rohil nain house",
    year:2000,
    color:"white and coffee",
    bedroom:4,
    kitchen:1,
    displayInfo:function ()
    {
        return `${this.name} ${this.year} ${this.color} ${this.bedroom} ${this.kitchen}`;

    }
};
// The ${} syntax is used to include variables or expressions within the string.
// In your context, ${this.name} ${this.year} ${this.color} is used to concatenate 
// the name, year, color and so on properties of the object, separated by spaces.

//accessing key value pair or itd members using dot notation
console.log("house name",house.name);
//displaying all info
console.log("displayInfo",house.displayInfo());

//add a new member or key value pair in it
house.address="basi baghpat";
console.log("house address",house.address);

//making change in existing values of keys
house.year=2001;
console.log(house.year);

//deleting one of the members
delete house.kitchen;
//checking updated values
console.log(house);

//Also remember 
// Arrays are used to store lists of data that are ordered and accessed by numerical indices, 
// while objects are used to store collections of key-value pairs that represent more complex entities 
// and are accessed by their keys.
//Arrays are special type of object who are multiple values in sinle variable var A=[1,2,3,4,5];


