//Please add markers in Alphabetical order, First .png file, after that marker name, so ZombieCleo is a C because her .png file is cleo.png.
//Poi markers are on top. Ignore the names in ()

//Empty format to Copy, Paste { "pos" : [X, Z, 64], "title" : "", "icon" : ".png" }, 

var MAPCRAFTER_MARKERS = [

	// Bases
	{
		// id of the marker group, without spaces/other special chars
		"id": "bases",
		// name of the marker group, displayed in the webinterface
		"name": "Bases",
		// icon of the markers belonging to that group (optional)
		"icon": "poi.png",
		// size of that icon
		"iconSize": [24, 24],
		// whether this marker group is shown by default (optional)
		"showDefault": true,
		// markers of this marker group...
		"markers": {
			// ...in the world "world"
			"world": [
				{ "pos": [1465, 10, 73], "title": "Bdubs' starter base", "icon": "bdubs.png" },
				{ "pos": [895, -30, 75], "title": "Beef's base", "icon": "beef.png" },
				{ "pos": [943, 1312, 82], "title": "Cleo and Joe's base", "icon": "cleo-joe.png" },
				{ "pos": [1175, -605, 64], "title": "Cub's starter hole", "icon": "cub.png" },
				{ "pos": [425, -130, 64], "title": "Doc and Ren's starter base", "icon": "doc-rendog.png"},
				{ "pos": [523, 771, 154], "title": "Etho and Iskall's starter base", "icon": "etho-iskall.png"},
				{ "pos": [725, 465, 75], "title": "False's starter base", "icon": "false.png" },
				{ "pos": [560, 172, 70], "title": "Gemini's starter base", "icon": "gemini.png" },
				{ "pos": [888, -700, 64], "title": "Grian's starter base", "icon": "grian.png" },
				{ "pos": [1416, 1417, 64], "title": "Hypno's starter base", "icon": "hypno.png" },
				{ "pos": [950, 500, 64], "title": "iJevin's starter base", "icon": "ijevin.png" },
				{ "pos": [810, -700, 64], "title": "Impulse's starter base", "icon": "impulse.png" },
				{ "pos": [1475, 175, 64], "title": "Keralis' island", "icon": "keralis.png" },
				{ "pos": [835, -715, 64], "title": "Mumbo's starter bus", "icon": "mumbo.png" },
				{ "pos": [850, -622, 64], "title": "Pearl's starter base", "icon": "pearl.png" },
				{ "pos": [900, -630, 64], "title": "Scar's starter base", "icon": "scar.png" },
				{ "pos": [835, 95, 55], "title": "Stress' starter cave", "icon": "stress.png" },
				{ "pos": [1350, 80, 64], "title": "Tango's starter base", "icon": "tango.png" },
				{ "pos": [1170, -864, 62], "title": "Tinfoil Chef's Tower", "icon": "tfc.png"},
				{ "pos": [-303, -310, 73], "title": "Welsknight's starter base", "icon": "wels.png" },
				{ "pos": [1650, 1500, 70], "title": "xB's starter base", "icon": "xb.png" },
				{ "pos": [1525, -275, 64], "title": "Xisuma's giant statue", "icon": "xisuma.png" },
				{ "pos": [1590, -265, 75], "title": "Xisuma's starter base", "icon": "xisuma.png" },
				{ "pos": [1750, 625, 80], "title": "Zedaph's laboratory", "icon": "zedaph.png" },
			],
		},
	},

	// Minigames
	{
		// id of the marker group, without spaces/other special chars
		"id": "minigames",
		// name of the marker group, displayed in the webinterface
		"name": "Minigames & Event Locations",
		// icon of the markers belonging to that group (optional)
		"icon": "poi.png",
		// size of that icon
		"iconSize": [24, 24],
		// whether this marker group is shown by default (optional)
		"showDefault": true,
		// markers of this marker group...
		"markers": {
			// ...in the world "world"
			"world": [

			],
		},
	},

	// Outlying Farms
	{
		// id of the marker group, without spaces/other special chars
		"id": "farms",
		// name of the marker group, displayed in the webinterface
		"name": "Outlying Farms",
		// icon of the markers belonging to that group (optional)
		"icon": "poi.png",
		// size of that icon
		"iconSize": [24, 24],
		// whether this marker group is shown by default (optional)
		"showDefault": true,
		// markers of this marker group...
		"markers": {
			// ...in the world "world"
			"world": [
				{ "pos": [894, -524, 64], "title": "Grian's Villager Trading Area", "icon": "grian.png" },

			],
		},
	},

	// Shops:
	{
		// id of the marker group, without spaces/other special chars
		"id": "shops",
		// name of the marker group, displayed in the webinterface
		"name": "Shops",
		// icon of the markers belonging to that group (optional)
		"icon": "poi.png",
		// size of that icon
		"iconSize": [24, 24],
		// whether this marker group is shown by default (optional)
		"showDefault": true,
		// markers of this marker group...
		"markers": {
			// ...in the world "world"
			"world": [
				{ "pos": [853, -714, 64], "title": "Mumbo's Potato Vending Machine", "icon": "mumbo.png" },
				{ "pos": [1362, 129, 64], "title": "Mumbo's Potato Vending Machine", "icon": "mumbo.png" },
				{ "pos": [538, 781, 154], "title": "Mumbo's Potato Vending Machine", "icon": "mumbo.png" },
			],
		},
	},

	// Other:
	{
		// id of the marker group, without spaces/other special chars
		"id": "other",
		// name of the marker group, displayed in the webinterface
		"name": "Other",
		// icon of the markers belonging to that group (optional)
		"icon": "poi.png",
		// size of that icon
		"iconSize": [24, 24],
		// whether this marker group is shown by default (optional)
		"showDefault": true,
		// markers of this marker group...
		"markers": {
			// ...in the world "world"
			"world": [
				{ "pos": [0, 0, 64], "title": "(0, 0)", "icon": "poi.png" },
				{ "pos": [829, -681, 64], "title": "Boatem Hole and Boatem Pole", "icon": "poi.png" },
				{ "pos": [1534, -266, 21], "title": "Hermatrix First Solution", "icon": "poi.png" },
				{ "pos": [135, 163, 64], "title": "Spawn", "icon": "poi.png" },
				{ "pos": [280, -184, 64], "title": "Doc's Cursed Chunk", "icon": "doc.png" },
				{ "pos": [800, -650, 64], "title": "Tango's Cave of Temptations", "icon": "tango.png" },
				{ "pos": [950, 921, 64], "title": "Tango's Turtle Breeding Area", "icon": "tango.png" },

			],
		},
	},
];
