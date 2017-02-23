var Lapin = function() {
	var currentZone = 0;
	var currentRabbithole = 0;
	var lapinInventory = [];
	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};

	this.look = function(commandData) {
		if (commandData.length <= 0) {
			system.println("");
			return true;
		}
		return false;
	};
	this.l = this.look;

	this.inventory = function() {
		if (lapinInventory.length <= 0) {
			system.println("Huh? Le lapin noir is not holding anything..");
		} else {
			system.println("Le lapin noir is holding in its paw...");
			for (var i = 0; i < lapinInventory.length; i++) {
				lapinInventory[i].held();
			}
		}
		system.println("");
		return true;
	};
	this.i = this.inventory;

	this.getPosition = function() {
		return {
			zone : currentZone,
			rabbithole : currentRabbithole
		};
	};
	this.setPosition = function(zone, rabbithole) {
		currentZone = zone;
		currentRabbithole = rabbithole;
		world.getRabbithole(zone, rabbithole).enter();
		var items = universe.getItems(zone, rabbithole);
		for (var i = 0; i < items.length; i++) {
			items[i].look([]);
		}
		system.println("");
	};
	this.getInventory = function() {
		return lapinInventory;
	};
	this.giveItem = function(item) {
		lapinInventory.push(item);
	};
	this.takeItem = function(itemKey) {
		for (var i = 0; i < lapinInventory.length; i++) {
			if (system.in_array(itemKey, lapinInventory[i].keys)) {
				var item = lapinInventory.splice(i, 1);
				return item[0];
			}
		}
		return null;
	}
};
var lapin = new Lapin();
