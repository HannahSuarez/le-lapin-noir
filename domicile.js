var domicile = [];
domicile[0] = function() {
	var title = "An unusual looking rabbit hole greets you";
	var description = "Faint music and chatter from the high tea party can be heard on what seems to be a whole new universe. However your focus is intent on this rabbit hole in front of you, bringing you in";
	var exitsDescription = "Do you enter? Go forth <strong>into the rabbit hole</strong>. You whip your neck back towards the party.  People laughing, maybe I should <strong>go back and join them</strong>?";
	var visited = false;
	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};
	this.enter = function() {
		system.title(title);
		system.println("<strong>" + title + "</strong>");
		if (!visited) {
			system.println(description);
			system.println(exitsDescription);
			visited = true;
		}
	};
	this.north = function() {
		system.println("You decide to enter into the rabbit hole.  It feels dark and eerie but at the same time you find it comforting.");
		system.println("");
		lapin.setPosition(0, 1);
		return true;
	};
	this.n = this.north;

	this.south = function() {
		system.println("You decide to walk back to the party and join the hostess and guests. Back to tea and cake.");
		system.println("");
		lapin.setPosition(0, 2);
		return true;
	};
	this.s = this.south;
	this.look = function(commandData) {
		if (commandData.length <= 0) {
			system.println("You decide to instead have a look around and see if there is some sort of pathway or further marks on the ground from the rabbit hole.  Are there any animals here?");
			system.println("");
			system.println(description);
			system.println(exitsDescription);
		}
		return false;
	};
	this.l = this.look;
};
domicile[1] = function() {
	var title = "A lonely otherworldy tunnel";
	var description = "While in certain contexts the tunnel may seem like a bad idea.  This time around, it looks lonely and forgotten behind a light veil of leaves and branches. You are not sure if it's from the party but the tunnel seems to be wafting a faint smell of...cookies.";
	var exitsDescription = "You may decide to enter into the tunnel and venture <strong>south</strong> into the tunnel. However on the corner of your eyes is faint movement to the <strong>east</strong> of the tunnel. But then again, why not just go back to the tea party <strong>north</strong> of the garden?";
	var visited = false;
	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};
	this.enter = function() {
		system.title(title);
		system.println("<strong>" + title + "</strong>");
		if (!visited) {
			system.println(description);
			system.println(exitsDescription);
			visited = true;
		}
	};
	this.south = function() {
		system.println("You have no care in the world and decide to venture down the tunnel.");
		system.println("");
		player.setPosition(0, 0);
		return true;
	};
	this.s = this.south;
	this.east = function() {
		system.println("The movement intrigues you more.  You decide to follow it east of the tunnel.");
		system.println("");
		player.setPosition(1, 0);
		return true;
	};
	this.e = this.east;

	this.north = function() {
		system.println("You decide to head north to the garden and back to the tea party.");
		system.println("");
		player.setPosition(0, 3);
		return true;
	};
	this.n = this.north;

	this.look = function(commandData) {
		if (commandData.length <= 0) {
			system.println("Your eyes adjust to the gradiations of sunlight in between the clouds.");
			system.println("");
			system.println(description);
			system.println(exitsDescription);
		}
		return false;
	};
	this.l = this.look;
};
domicile[2] = function() {
	var title = "The 'Neath";
	var description = "Fate has intervened.;
	var exitsDescription = "The tunnel is big enough for you so you start crawling <strong>deep into the tunnel</strong>.  You thought about giving up and just heading back until suddenly...the ground in the tunnel collapses and you start pumelling down...down...down.";
	var visited = false;
	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};
	this.enter = function() {
		system.title(title);
		system.println("<strong>" + title + "</strong>");
		if (!visited) {
			system.println(description);
			system.println(exitsDescription);
			visited = true;
		}

	};
	this.north = function() {
		system.println("Dirt, grass, leaves, more dirt.  Is there a way back up and out of this tunnel?");
		system.println("");
		player.setPosition(0, 0);
		return true;
	};
	this.n = this.north;

	this.look = function(commandData) {
		if (commandData.length <= 0) {
			system.println("You feel the cool air around you in the tunnel");
			system.println("");
			system.println(description);
			system.println(exitsDescription);
		}
		return false;
	};
	this.l = this.look;
};
domicile[3] = function() {
	var title = "The beginning of the end.";
	var description = "You open your eyes and rub them.  Everything seems to blurry.  Just a blur of dark brown.  There is a earthy smell.  Your body jolts and the realization of memories of the most recent events flood back.  Tunnel.  Falling down.   Where am I?";
	var exitsDescription = "Who am I? You look down.  Instead of hands in front is.. paws.  Who's paws? What? Are they mine?  You look up and immediately spot a mirror reflect some unknown light source.  You head  <strong>towards the mirror</strong>.";
	var visited = false;
	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};
	this.enter = function() {
		system.title(title);
		system.println("<strong>" + title + "</strong>");
		if (!visited) {
			system.println(description);
			system.println(exitsDescription);
			visited = true;
		}
	};
	this.south = function() {
		system.println("You force yourself to the mirror, intent on somehow reaching it in one piece.");
		system.println("");
		player.setPosition(0, 1);
		return true;
	};
	this.s = this.south;

	this.look = function(commandData) {
		if (commandData.length <= 0) {
			system.println("You look around.");
			system.println("");
			system.println(description);
			system.println(exitsDescription);
		}
		return false;
	};
	this.l = this.look;
};
domicile[3] = function() {
	var title = "The beginning of the end.";
	var description = "You open your eyes and rub them.  Everything seems to blurry.  Just a blur of dark brown.  There is a earthy smell.  Your body jolts and the realization of memories of the most recent events flood back.  Tunnel.  Falling down.   Where am I?";
	var exitsDescription = "Who am I? You look down.  Instead of hands in front is.. paws.  Who's paws? What? Are they mine?  You look up and immediately spot a mirror reflect some unknown light source.  You head  <strong>towards the mirror</strong>.";
	var visited = false;
	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};
	this.enter = function() {
		system.title(title);
		system.println("<strong>" + title + "</strong>");
		if (!visited) {
			system.println(description);
			system.println(exitsDescription);
			visited = true;
		}
	};
	this.south = function() {
		system.println("You force yourself to the mirror, intent on somehow reaching it in one piece.");
		system.println("");
		player.setPosition(0, 1);
		return true;
	};
	this.s = this.south;

	this.look = function(commandData) {
		if (commandData.length <= 0) {
			system.println("You look around.");
			system.println("");
			system.println(description);
			system.println(exitsDescription);
		}
		return false;
	};
	this.l = this.look;
};

var mirrorItems = [];
mirrorItems[0] = function() {
	var viewed = false;
	this.keys = [ "monocole", "watch" ];
	this.actions = function(command, commandData) {
		if (typeof (this[command]) == "function") {
			return this[command](commandData);
		}
		return false;
	};

	this.look = function(commandData) {
		if (commandData.length > 0 && system.in_array(commandData[0], this.keys)) {
			system.println("A monocle filled with gold and framed with antique engravings shine out to you.  Beside it is a similarly intricate, gold pocket watch.");
			viewed = true;
			return true;
		}
		if (commandData.length <= 0) {
			if (viewed) {
				system.println("The monocle is hanging on a string on the edge of the mirror.");
			} else {
				system.println("The gold pocket watch seems to be swining on its own.");
			}
		}
		return false;
	};
	this.l = this.look;
	this.take = function(commandData) {
		if (system.in_array(commandData[0], this.keys)) {
			if (viewed) {
				system.println("You paw the monocle off the mirror's edge.");
			} else {
				system.println("You paw the gold pocket watch off the mirror's edge.");
			}
			system.println("");
			var item = world.takeItem(commandData[0], player.getPosition());
			player.giveItem(item);
			return true;
		}
		return false;
	};
	this.held = function() {
		if (viewed) {
			system.println("a gold monocle");
		} else {
			system.println("a gold pocket watch");
		}
		return false;
	};
	this.drop = function(commandData) {
		if (system.in_array(commandData[0], this.keys)) {
			if (viewed) {
				system.println("You drop the monocle.  It is so fragile, it shatters on the ground.");
			} else {
				system.println("You drop the pocket watch.  It is so fragile, it springs open and its mechanical contents spring all over the dirt ground.");
			}
			system.println("");
			var item = player.takeItem(commandData[0]);
			world.giveItem(item, player.getPosition());
			return true;
		}
		return false;
	};
};

universe.addZone(0, domicile);
universe.addItems(0, 3, mirrorItems);
