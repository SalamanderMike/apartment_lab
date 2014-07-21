var Person = require('./people/person.js'),
  	Manager = require('./people/manager'),
  	Tenant = require('./people/tenant');
var people = require("./people.json"); // Data File


var Property = require('./property_types/property'),
  	Duplex = require('./property_types/duplex.js'),
  	ApartmentBuilding = require('./property_types/apartment_building.js'), 
  	TownHouse = require('./property_types/town_house.js');
var properties = require('./property.json'); // Data File

var Unit = require('./unit.js');

// start our apartment module to export later
var App = {};

// Add our Constructors from all files to App object
// Add our types of people to our 
// module
App.Person = Person;
App.Manager = Manager;
App.Tenant = Tenant;

// Add our types of properties
// to our module
App.Property = Property;
App.Duplex = Duplex;
App.TownHouse = TownHouse;
App.ApartmentBuilding = ApartmentBuilding;

// Export our unit
App.Unit = Unit;


// 
// var app = require('main.js')






// ***** TEST ***** I Can call this from here OR property.js
// I can get the prototype chain working in one straight line, but 
// I can't seem to get it to work through main.js.
// I imagine there is a way to call everything through main.js,
// like the center of a web, but, I would always get inherit errors trying.




var residence = new Property(	properties.address, 
															properties.building,
															properties.city,
															properties.planet);

for (var i = 0; i < 9; i++) {
var lot = Math.floor(Math.random() * 3); // random lot from data
var x = Math.floor(Math.random() * 9); // random person from data
var y = Math.floor(Math.random() * 9); // random person from data

residence.address = properties[lot].address;
residence.building = properties[lot].building;
residence.city = properties[lot].city;
residence.planet = properties[lot].planet;

residence.setManager(residence.people[x]);
// residence.addTenant(1, y);

// console.log("Old Manager:", residence.manager().name);

// console.log("New Manager: ", residence.getManager());
console.log("Add Tenant: ", residence.people[y].name + "?", 
														residence.addTenant(residence.building, residence.people[y].name));
console.log("Address: ", residence.address, residence.city+ ",", residence.planet);
console.log("Building: ", residence.building);
console.log("");
// console.log("References: ", residence.addReference());
// console.log("Number of references: ", residence.addReference().length);
}

console.log(residence.units);
residence.availableUnits();
residence.removeTenant("Appartment");
console.log("Oops! An appartment just became available!")
residence.availableUnits();
residence.rentedUnits();

// console.log(residence.addProperty({address: "53454 New ln", city: "New City", planet: "New Planet"}));


module.exports = App;

