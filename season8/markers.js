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
				{ "pos": [1465, 10, 73], "title": "Bdubs' Moon", "icon": "bdubs.png" },
				{ "pos": [895, -30, 75], "title": "The Prawn (Beef's base)", "icon": "beef.png" },
				{ "pos": [943, 1312, 82], "title": "Cleo and Joe's base", "icon": "cleo-joe.png" },
				{ "pos": [1175, -605, 64], "title": "Cub's starter hole", "icon": "cub.png" },
				{ "pos": [425, -130, 64], "title": "Doc and Ren's starter bus", "icon": "doc-rendog.png"},
				{ "pos": [523, 771, 154], "title": "Etho and Iskall's base", "icon": "etho-iskall.png"},
				{ "pos": [725, 465, 75], "title": "False's starter base", "icon": "false.png" },
				{ "pos": [560, 172, 70], "title": "Gemini's Cottagecore House", "icon": "gemini.png" },
				{ "pos": [888, -700, 64], "title": "Grian's starter base", "icon": "grian.png" },
				{ "pos": [1416, 1417, 64], "title": "Hypno's starter base", "icon": "hypno.png" },
				{ "pos": [950, 500, 64], "title": "iJevin's starter base", "icon": "ijevin.png" },
				{ "pos": [810, -700, 64], "title": "Impulse's starter base", "icon": "impulse.png" },
				{ "pos": [1475, 175, 64], "title": "Keralis' island", "icon": "keralis.png" },
				{ "pos": [835, -715, 64], "title": "Mumbo's tiny house/Treesa", "icon": "mumbo.png" },
				{ "pos": [850, -622, 64], "title": "Pearl's starter base", "icon": "pearl.png" },
				{ "pos": [900, -630, 64], "title": "Scar's starter base", "icon": "scar.png" },
				{ "pos": [835, 101, 55], "title": "Stress' ravine", "icon": "stress.png" },
				{ "pos": [1350, 80, 64], "title": "Tango's starter base", "icon": "tango.png" },
				{ "pos": [1230, -970, 64], "title": "Tinfoil Chef's Tower", "icon": "tfc.png"},
				{ "pos": [-303, -310, 73], "title": "Welsknight's starter base", "icon": "wels.png" },
				{ "pos": [1650, 1500, 70], "title": "xB's starter base", "icon": "xb.png" },
				{ "pos": [1300, -310, 90], "title": "EvilXisuma's Tower of Terror", "icon": "xisuma.png" },
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
				{ "pos": [1190, 510, 64], "title": "Horse Course", "icon": "bdubs-etho.png" },
				{ "pos": [537, 158, 25], "title": "Gemini's parkour challenge", "icon": "gemini.png" },
				{ "pos": [853, -724, 64], "title": "Tegg", "icon": "grian.png" },
				{ "pos": [-56, 466, 64], "title": "Yes Wings Club", "icon": "impulse-wels.png" },
				{ "pos": [540, 760, 121], "title": "Iskall's No Wings Club", "icon": "iskall.png" },
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
				{ "pos": [1000, 1220, 64], "title": "Cleo's Graveyard (bee farm)", "icon": "cleo.png" },
				{ "pos": [180, 555, 64], "title": "Etho's drowned farm", "icon": "etho.png" },
				{ "pos": [894, -524, 64], "title": "Grian's Villager Trading Area", "icon": "grian.png" },
				{ "pos": [1591, 1271, 64], "title": "Horse Head Farms", "icon": "hypno-xb.png" },
				{ "pos": [760, -1200, 64], "title": "Impulse's hostile mob farm", "icon": "impulse.png" },
				{ "pos": [-1240, 1050, 64], "title": "Stress's flower forest <3", "icon": "stress.png" },
				{ "pos": [1304, 47, 64], "title": "Tango's honey farm", "icon": "tango.png" },
				{ "pos": [1800, 200, 64], "title": "Tango's copper farm", "icon": "tango.png" },
				{ "pos": [-1570, -220, 64], "title": "Wels' sugarcane farm", "icon": "wels.png" },
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
				{ "pos": [950, -430, 64], "title": "Big Eye Stop On In and Buy!", "icon": "bigeye.png" },
				{ "pos": [1073, 215, 64], "title": "Big Eye Stop On In and Buy!", "icon": "bigeye.png" },
				{ "pos": [550, 240, 64], "title": "Big Eye Stop On In and Buy!", "icon": "bigeye.png" },
				{ "pos": [130, 190, 64], "title": "Big Eye Stop On In and Buy!", "icon": "bigeye.png" },
				{ "pos": [650, 650, 64], "title": "Big Eye Stop On In and Buy!", "icon": "bigeye.png" },
				{ "pos": [1030, 1130, 64], "title": "Big Eye Stop On In and Buy!", "icon": "bigeye.png" },
				{ "pos": [867, -680, 64], "title": "The Grian Train", "icon": "grian.png" },
				{ "pos": [827, -558, 64], "title": "iSOAR", "icon": "impulse.png" },
				{ "pos": [1007, 1242, 64], "title": "Joe's Flower Stall", "icon": "joe.png" },
				{ "pos": [853, -714, 64], "title": "Potato Boy Tater Vendor", "icon": "mumbo.png" },
				{ "pos": [1362, 129, 64], "title": "Potato Boy Tater Vendor", "icon": "mumbo.png" },
				{ "pos": [538, 781, 154], "title": "Potato Boy Tater Vendor", "icon": "mumbo.png" },
				{ "pos": [1352, 83, 64], "title": "Copper n Candles", "icon": "tango.png" },
				{ "pos": [1655, 1505, 64], "title": "Glow Inc!", "icon": "xb.png" },
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
				{ "pos": [829, -681, 64], "title": "Boatem Pole and Boatem Hole", "icon": "poi.png" },
				{ "pos": [1443, 762, 64], "title": "Deadman Bay named after Henry Deadman", "icon": "poi.png" },
				{ "pos": [740, -600, 64], "title": "Goatem Pole", "icon": "doc-rendog.png" },
				{ "pos": [765, -520, 64], "title": "Goat sanctuary", "icon": "doc-rendog.png" },
				{ "pos": [1534, -266, 21], "title": "Hermatrix first solution", "icon": "poi.png" },
				{ "pos": [135, 163, 64], "title": "Spawn", "icon": "poi.png" },
				{ "pos": [280, -184, 64], "title": "Doc's Cursed Chunk", "icon": "doc.png" },
				{ "pos": [1225, 530, 64], "title": "Tango's horse breeding area", "icon": "tango.png" },
				{ "pos": [950, 921, 64], "title": "Tango's turtle breeding area", "icon": "tango.png" },
				{ "pos": [790, -740, 64], "title": "Tango's Bedrock Service", "icon": "tango.png" },
			],
		},
	},
];
