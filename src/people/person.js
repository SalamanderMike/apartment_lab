// Person
// Person Data File
// Duplex = Coruscant, Town House = Alderaan, Apartment = Tatooine
// Jabba D. Hutt wns Tatooine, Coruscant, Alderaan. Manages Tatooine
var people = require("../people.json"); // Data File

// Using JSON data file, every identity is an index within people[0...9]
function Person(name, contact){
	this.name = name;
  this.contact = contact;
};

Person.prototype.dataLength = people.length;
Person.prototype.people = people;

Person.prototype.manager = function() {
	for (var individual in this.people){
		if (this.people[individual].employment === "Property Investor") {
			return {name: this.people[individual].name, 
							contact: this.people[individual].contact};
		};
	};
}

Person.prototype.tenant = function() {
	for (var individual in this.people){
		if (this.people[individual].employment !== "Property Investor") {
			return {name: this.people[individual].name, 
							contact: this.people[individual].contact,
							address: this.people[individual].address};
		};
	};
}

// Export
module.exports = Person;