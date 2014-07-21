// Inherit Function
var inherits = function(Child, Parent) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
};

module.exports = inherits;
