var should = require("should");
var User = function(name) {
	this.name = name;
};
describe("Checking if the user is created correctly", function() {
	it("should create the user with the correct name", function() {
		debugger
		var breanne = new User("breanne");
		breanne.name.should.be.equal("breanne");
	});
});