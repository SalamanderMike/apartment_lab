// Requires
var Person = require("./person"),
		inherits = require('../inherits.js');
// Inherits
		inherits(Tenant, Person);

function Tenant(name, contact) {
	Person.call(this, name, contact);
  this.references = [];
};



Tenant.prototype.addReference = function(){ // references are random from data
	this.references = [];
	for (var i = 0, collect = []; i < 2; i += 1) {
		var x = Math.floor(Math.random() * this.dataLength);
		if (collect[0] !== this.people[x].name){
			collect.push(this.people[x].name); 
		};
	};
	this.references.push(collect); // 2D array associated with index of people (optional)
	return this.references;
};



// Export
module.exports = Tenant;
