var Property = require("./property.js"),
		inherits = require('../inherits.js');
// Inherits
inherits(TownHouse, Property);


function TownHouse(address){
  // only has one unit per address
};

TownHouse.prototype.available = function(){
  // if it has a tenant, it should not be available
};












// Export
module.exports = TownHouse;
