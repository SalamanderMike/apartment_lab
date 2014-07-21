
var properties = require('../property.json'), // Data File
		Manager = require('../people/manager.js'), // get manager's info
		Tenant = require('../people/tenant.js'); // get tenants' info

// var app = require('../main.js'); *** Not Working ***
// var Manager = app.Manager;
// var Tenant = app.Tenant;

// I can get the prototype chain working through Tenant to Person, but 
// I can't seem to get it to work through Manager to Person, too
// I imagine there is a way to call everything through main.js,
// like the center of a web, but, I would always get inherit errors trying.
Property.prototype = new Tenant();
Property.prototype.constructor = Property;



function Property(address, building, city, planet) {
  this.address = address;
  this.building = building;
  this.city = city;
  this.planet = planet;
  this.units = {"Townhouse": 1,
  							"Duplex": 2,
  							"Appartment": 5};
}

Property.prototype.properites = properties;

Property.prototype.setManager = function(person) {
	this.man = person;
};

Property.prototype.getManager = function(){
	if (this.man){
		return this.man.name;
	} 
	return "No Manager";
};

Property.prototype.addTenant = function(unit, tenant) {
	var refs = this.addReference();
	if (this.units[unit] > 0) {
		if ((this.man) && refs[0].length > 1){
			this.name = tenant;
			this.units[unit] -= 1;
			return "YES. " +this.name+ " has enough references: " + refs;
		}
		return "NO. Not enough references: " + refs;
	}
	return "SORRY, nerf herder, here are no units available on " + this.planet;
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
};

Property.prototype.removeTenant = function(unit, tenant) {
	this.units[unit] += 1;
};

Property.prototype.availableUnits = function(){
	if (this.units["Appartment"] > 0) {
		console.log("There's still "+ this.units["Appartment"] +" Apartment Available");
	}
	if (this.units["Duplex"] > 0) {
		console.log("There's still "+ this.units["Duplex"] +" Duplex Available");
	}
	if (this.units["Townhouse"] > 0) {
		console.log("There is still a Townhouse Available!");
	}
}

Property.prototype.rentedUnits = function(){
	if (this.units["Appartment"] < 5) {
		console.log((5 - this.units["Appartment"]) + 
			" apartment rented on planet: Tatooine, 22 Scoundrel Ave, Mos Eisley");
	}
	if (this.units["Duplex"] < 2) {
		console.log((2 - this.units["Duplex"]) + 
			" duplex rented on planet: Hoth, 7878 Tauntaun Ln, Burrrrbank");
	}
	if (this.units["Townhouse"] < 1) {
		console.log(
			"1 townhouse rented on planet: Coruscant, 13678 Dark St, New Emperor City");
	}
}








// // ***** TEST *****
// var residence = new Property(	properties.address, 
// 															properties.building,
// 															properties.city,
// 															properties.planet);

// for (var i = 0; i < 9; i++) {
// var lot = Math.floor(Math.random() * 3); // random lot from data
// var x = Math.floor(Math.random() * 9); // random person from data
// var y = Math.floor(Math.random() * 9); // random person from data

// residence.address = properties[lot].address;
// residence.building = properties[lot].building;
// residence.city = properties[lot].city;
// residence.planet = properties[lot].planet;

// residence.setManager(residence.people[x]);
// // residence.addTenant(1, y);

// // console.log("Old Manager:", residence.manager().name);

// // console.log("New Manager: ", residence.getManager());
// console.log("Add Tenant: ", residence.people[y].name + "?", 
// 														residence.addTenant(residence.building, residence.people[y].name));
// console.log("Address: ", residence.address, residence.city+ ",", residence.planet);
// console.log("Building: ", residence.building);
// console.log("");
// // console.log("References: ", residence.addReference());
// // console.log("Number of references: ", residence.addReference().length);
// }

// console.log(residence.units);
// residence.availableUnits();
// residence.removeTenant("Appartment");
// console.log("Oops! An appartment just became available!")
// residence.availableUnits();
// residence.rentedUnits();





module.exports = Property;
