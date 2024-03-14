//Please add markers in Alphabetical order, First .png file, after that marker name, 
//so ZombieCleo is a C because her .png file is cleo.png
//Poi markers are on top. Ignore the names in ()

//Empty format to Copy, Paste { "pos" : [X, Z, 64], "title" : "", "icon" : ".png" },

//Season 10: updated bdubs' and cub's skins/icons
// !! use bdubs2.png and cub2.png instead !!

var MAPCRAFTER_MARKERS = [

	// Starter Bases
	{
		// id of the marker group, without spaces/other special chars
		"id": "starters",
		// name of the marker group, displayed in the webinterface
		"name": "Starter Bases",
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
				
				{ "pos": [-439, -1067, 80], "title": "Bdubs's starter base", "icon": "bdubs2.png" },

				{ "pos": [-173, 201, 71], "title": "Beef's home on the range", "icon": "beef.png" },
				
				{ "pos": [-527, 310, 64], "title": "Cleo's starter base", "icon": "cleo.png" },
				
				{ "pos": [-758, 218, 70], "title": "Cub's area", "icon": "cub2.png" },
				
				//{ "pos": [0, 0, 64], "title": "Doc's", "icon": "doc.png"},//
				
				{ "pos": [-844, 40, 49], "title": "Etho's house", "icon": "etho.png"},
				
				{ "pos": [-333, 267, 76], "title": "False's starter base", "icon": "false.png" },
				
				{ "pos": [-777, -278, 71], "title": "Gem's fishing boat", "icon": "gemini.png" },
				
				{ "pos": [-804, -448, 73], "title": "Grian's starter base", "icon": "grian.png" },
				
				{ "pos": [69, -14, 64], "title": "Hypno's area", "icon": "hypno.png" },
				
				{ "pos": [-221, -172, 77], "title": "Jevin's starter base", "icon": "ijevin.png" },
				
				{ "pos": [-535, -347, 68], "title": "Impulse's storage building", "icon": "impulse.png" },
				
				{ "pos": [-352, 103, 103], "title": "Iskall's area", "icon": "iskall.png" },
				
				{ "pos": [-999, 371, 73], "title": "Joe's tiny house", "icon": "joe.png" },
				
				{ "pos": [12, 334, 64], "title": "Keralis' yacht", "icon": "keralis.png" },
				
				{ "pos": [-634, -637, 72], "title": "The Mothball (Mumbo)", "icon": "mumbo.png" },
				
				{ "pos": [-617, -35, 68], "title": "Pearl's starter base", "icon": "pearl.png" },
				
				{ "pos": [-273, 130, 70], "title": "Tower of the Dog/Rubbish Dump (Rendog)", "icon": "rendog.png" },
				
				{ "pos": [-871, -654, 75], "title": "Scar's zoo train", "icon": "scar.png" },

				{ "pos": [-686, -328, 75], "title": "Skizz Crack", "icon": "skizz.png" },

				{ "pos": [-533, -465, 75], "title": "Smallishbeans' City", "icon": "joel.png" },
				
				{ "pos": [-412, 147, 72], "title": "Stress' area", "icon": "stress.png" },
				
				{ "pos": [-722, -61, 68], "title": "Tango's starter base", "icon": "tango.png" },
				
				{ "pos": [214, -21, 69], "title": "Wels' castle", "icon": "wels.png" },
				
				{ "pos": [-83, 374, 64], "title": "xB's starter base", "icon": "xb.png" },
				
				{ "pos": [-128, -93, 72], "title": "Xisuma's temple", "icon": "xisuma.png" },
				
				{ "pos": [-1238, -100, 66], "title": "Zedaph's crevice", "icon": "zedaph.png" },

			],
		},
	},
	
	// Main Bases
	{
		// id of the marker group, without spaces/other special chars
		"id": "bases",
		// name of the marker group, displayed in the webinterface
		"name": "Main Bases",
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
				{ "pos": [-280, 345, 64], "title": "False's planned base", "icon": "false.png" },
				
				{ "pos": [-220, 77, 64], "title": "Ren's exoplanetary outpost", "icon": "rendog.png" },

				{ "pos": [-670, -180, 64], "title": "Skizz's pyramid", "icon": "skizz.png" },

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
				{ "pos": [-565, 675, 64], "title": "The Gaming District", "icon": "poi.png" }
			],
		},
	},
	
	// Farms
	{
		// id of the marker group, without spaces/other special chars
		"id": "farms",
		// name of the marker group, displayed in the webinterface
		"name": "Farms",
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

				{ "pos": [-235, -4429, 64], "title": "Doc's swamp farms", "icon": "doc.png"},

				{ "pos" : [8280, 800, 64], "title" : "Keralis' dye farms", "icon" : "keralis.png" },
				
				{ "pos" : [1704, -1516, 64], "title" : "Mumbo's slime farm", "icon" : "mumbo.png" },

				{ "pos" : [-3810, -2150, 64], "title" : "Tango's raid farm", "icon" : "tango.png" },

				{ "pos" : [-240, -320, 64], "title" : "Log Land (Xisuma)", "icon" : "xisuma.png" },
        
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
				{ "pos": [-240, 295, 64], "title": "False Enterprises", "icon": "false.png" },

				{ "pos": [210, 160, 64], "title": "Kitty Café (Cleo)", "icon": "cleo.png" },
				
				{ "pos": [285, 225, 64], "title": "Doc's hourglass", "icon": "doc.png" },
								
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
				{ "pos": [0, 0, 64], "title": "Spawn (0, 0)", "icon": "poi.png" },

				{ "pos": [184, -290, 64], "title": "The Neighbo(u)rhood portal", "icon": "poi.png" },

				{ "pos": [180, 212, 64], "title": "Shopping district portal", "icon": "poi.png" },

				{ "pos": [210, 240, 64], "title": "Permit shuffler", "icon": "cub2.png" },

				{ "pos": [500, 215, 64], "title": "Department of Hermit Permits", "icon": "grian.png" },

				{ "pos": [-295, 60, 64], "title": "Iskall's monstrosity/monolith", "icon": "iskall.png" },

				{ "pos": [-540, -100, 64], "title": "Hermit Post Co.", "icon": "pearl.png" },
			],
		},
	},
];
