// Requires
var Person = require("./person"),
		inherits = require('../inherits.js'),
		Property = require('../property_types/property.js'),
		Tenant = require('./tenant.js');

// Inherits
inherits(Manager, Person);
// inherits(Manager, Property);

function Manager(name, contact) {
	this.name = name;
	this.contact = contact;

  this.properties = [];
}



// Manager.prototype.addProperty = function(property) {
// 	this.address = property.address;
// 	this.city = property.city;
// 	this.planet = property.planet;
// 	return [this.address, this.city, this.planet]

//   // add property from properties
// };

Manager.prototype.removeProperty = function(property) {
  // remove properties
};


// var manager = new Manager(Manager.name, Manager.contact);
// console.log(manager.name, manager.contact);
// console.log(manager.addProperty({address: "53454 New ln", city: "New City", planet: "New Planet"}));



// Export
module.exports = Manager;