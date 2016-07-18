var App = App || {};
App.model = App.model || {};
App.model.Coin = function(name, weight, diameter, thickness) {
	this.name = name;
	this.weight = weight;
	this.diameter = diameter;
	this.thickness = thickness;
}