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
				
				{ "pos": [-877, 62, 49], "title": "Etho's house", "icon": "etho.png"},
				
				{ "pos": [-333, 267, 76], "title": "False's starter base", "icon": "false.png" },
				
				{ "pos": [-777, -278, 71], "title": "Gem's fishing boat", "icon": "gemini.png" },
				
				{ "pos": [-804, -448, 73], "title": "Grian's starter base", "icon": "grian.png" },
				
				{ "pos": [41, -14, 64], "title": "Hypno's area", "icon": "hypno.png" },
				
				{ "pos": [-221, -172, 77], "title": "Jevin's enchanted forest", "icon": "ijevin.png" },
				
				{ "pos": [-569, -375, 68], "title": "Impulse's storage building", "icon": "impulse.png" },
				
				{ "pos": [-352, 103, 103], "title": "Iskall's area", "icon": "iskall.png" },
				
				{ "pos": [-999, 371, 73], "title": "Joe's tiny house", "icon": "joe.png" },

				{ "pos": [-533, -465, 75], "title": "Smallishbeans' City", "icon": "joel.png" },
				
				{ "pos": [12, 334, 64], "title": "Keralis' tropical base", "icon": "keralis.png" },
				
				{ "pos": [-642, -632, 72], "title": "The Mothball (Mumbo)", "icon": "mumbo.png" },
				
				{ "pos": [-617, -35, 68], "title": "Pearl's starter base", "icon": "pearl.png" },
				
				{ "pos": [-273, 130, 70], "title": "Tower of the Dog/Rubbish Dump (Rendog)", "icon": "rendog.png" },
				
				{ "pos": [-788, -670, 75], "title": "Scar's zoo train", "icon": "scar.png" },

				{ "pos": [-686, -328, 75], "title": "Skizz Crack", "icon": "skizz.png" },
				
				{ "pos": [-412, 147, 72], "title": "Stress' area", "icon": "stress.png" },
				
				{ "pos": [-706, -61, 68], "title": "Tango's starter base", "icon": "tango.png" },
				
				{ "pos": [214, -21, 69], "title": "Wels' castle", "icon": "wels.png" },
				
				{ "pos": [-83, 374, 64], "title": "xB's former base (Sold to Keralis)", "icon": "xb.png" },
				
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
				{ "pos": [-280, 345, 64], "title": "False's base", "icon": "false.png" },

				{ "pos": [-815, -255, 64], "title": "Gem's village", "icon": "gemini.png" },

				{ "pos": [-124, -220, 64], "title": "Jevin's castle", "icon": "ijevin.png" },

				{ "pos": [540, -2227, 64], "title": "Hermit Holmdel (Joe)", "icon": "joe.png" },

				{ "pos": [1668, -1809, 64], "title": "Keralis' arctic base", "icon": "keralis.png" },

				{ "pos": [-575, -604, 64], "title": "Mumbo's village", "icon": "mumbo.png" },
				
				{ "pos": [-220, 77, 64], "title": "Ren's exoplanetary outpost", "icon": "rendog.png" },

				{ "pos": [-993, -726, 64], "title": "Scarfari Zoo (Scar)", "icon": "scar.png" },
				
				{ "pos": [-669, -206, 64], "title": "Skizz's pyramid", "icon": "skizz.png" },

				{ "pos": [-936, -114, 64], "title": "Tango's factory and airship", "icon": "tango.png" },

				{ "pos": [1167, -817, 40], "title": "Xb's Guardian Base", "icon": "xb.png" },

				{ "pos": [-484, -287, 64], "title": "Pixelpulse Valley (Impulse and Bdubs)", "icon": "poi.png" }
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
				{ "pos": [-494, 600, 64], "title": "Tennis (Bdubs)", "icon": "bdubs.png" },

				{ "pos": [-346, 665, 64], "title": "Guess the Hermit (Cleo)", "icon": "cleo.png" },

				{ "pos": [-288, 657, 64], "title": "Ghasketball (Cub)", "icon": "cub2.png" },
				
				{ "pos": [-536, 675, 64], "title": "Pot Shot (Cub)", "icon": "cub2.png" },

				{ "pos": [731, -2054, 64], "title": "The Labyrinth", "icon": "cub2.png" },

				{ "pos": [300, 425, 64], "title": "Ravager Rush/Etho's froglight shop", "icon": "etho.png" },

				{ "pos": [581, 202, 64], "title": "Go Touch Grass/Impulse's grass shop", "icon": "impulse.png" },

				{ "pos": [-421, -196, 64], "title": "Metro Mayhem (Impulse)", "icon": "impulse.png" },

				{ "pos": [-511, -353, 64], "title": "The Dipple Drop (Impulse)", "icon": "impulse.png" },

				{ "pos": [577, 144, 64], "title": "Pearl's dye shop/Dyeduction/\"Pearldle\"", "icon": "pearl.png" },

				{ "pos": [-443, 706, 64], "title": "Hungry Hermits (Tango)", "icon": "tango.png" },
				
				{ "pos": [-653, 711, 64], "title": "The Tangler (Tango)", "icon": "tango.png" },
				
				{ "pos": [-358, 760, 64], "title": "Mace Race (Xisuma)", "icon": "xisuma.png" },
				
				{ "pos": [-286, 724, 64], "title": "Dodgeball (Xisuma)", "icon": "xisuma.png" },

				{ "pos": [-567, 881, 64], "title": "Filming location of \"Is That Sheep Looking At Me?\"", "icon": "zedaph.png" },

				{ "pos": [543, 215, 64], "title": "Site of the first Permitmaster", "icon": "poi.png" },

				{ "pos": [-395, 650, 64], "title": "TCG Arena", "icon": "poi.png" },
				
				{ "pos": [-575, 691, 64], "title": "The Gaming District", "icon": "poi.png" }
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

				{ "pos": [-240, -5545, 64], "title": "Doc's bonemeal farm", "icon": "doc.png"},

				{ "pos" : [8280, 800, 64], "title" : "Keralis' dye farms", "icon" : "keralis.png" },
				
				{ "pos" : [170, -1516, 64], "title" : "Mumbo's slime farm", "icon" : "mumbo.png" },

				{ "pos" : [-3810, -2150, 64], "title" : "Tango's raid farm", "icon" : "tango.png" },

				{ "pos" : [-212, -331, 64], "title" : "Loglands (Xisuma)", "icon" : "xisuma.png" },

				{ "pos" : [-970, -3395, 64], "title" : "Golia (Xisuma)", "icon" : "xisuma.png" },
				
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
				{ "pos": [574, 346, 64], "title": "Bdubs' potion shop", "icon": "bdubs.png" },
				
				{ "pos": [204, 169, 64], "title": "Kitty Café (Cleo)", "icon": "cleo.png" },

				{ "pos": [124, 216, 64], "title": "Cub's goat horn shop", "icon": "cub2.png" },

				{ "pos": [200, 262, 64], "title": "CuBOOM Fireworks", "icon": "cub2.png" },
				
				{ "pos": [289, 213, 64], "title": "Big Wood (Doc)", "icon": "doc.png" },

				{ "pos": [342, 182, 64], "title": "Trims (Doc)", "icon": "doc.png" },

				{ "pos": [252, 366, 64], "title": "Ren's beacon shop", "icon": "rendog.png" },

				{ "pos": [646, 189, 64], "title": "Gem's trident shop", "icon": "gemini.png" },

				{ "pos": [301, 115, 64], "title": "Jevin's mob head shop", "icon": "ijevin.png" },

				{ "pos": [78, 276, 64], "title": "Keralis' candle shop", "icon": "keralis.png" },

				{ "pos": [110, 250, 64], "title": "Mumbo's gold and iron shops", "icon": "mumbo.png" },

				{ "pos": [554, -88, 64], "title": "The Death Scar", "icon": "scar.png" },

				{ "pos": [383, 86, 64], "title": "Twin Suns Sand", "icon": "scar.png" },

				{ "pos": [277, 479, 64], "title": "Two Tek Delay (Tango)", "icon": "tango.png" },

				{ "pos": [475, 175, 64], "title": "Sales+", "icon": "xisuma.png" },
				
				{ "pos": [510, 480, 64], "title": "Xisuma's copper shop", "icon": "xisuma.png" },

				{ "pos": [153, 126, 64], "title": "Joel's music shop/Mind Your Banners (Skizz)", "icon": "poi.png" },

				{ "pos": [153, 383, 64], "title": "Wool Street", "icon": "poi.png" },

				{ "pos": [125, 265, 64], "title": "Half Foods grocery store (xB and Beef)", "icon": "poi.png" },

				//{ "pos": [-240, 295, 64], "title": "False Enterprises", "icon": "false.png" },
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
				{ "pos": [86, 107, 64], "title": "Tall Claims Court", "icon": "bdubs2.png" },

				{ "pos": [300, -287, 64], "title": "Doc's Skyblock", "icon": "doc.png" },
				
				//{ "pos": [210, 240, 64], "title": "Permit shuffler", "icon": "cub2.png" },

				{ "pos": [505, 210, 64], "title": "Department of Hermit Permits, Main office", "icon": "grian.png" },

				{ "pos": [783, -2174, 64], "title": "Shrine to Sal", "icon": "ijevin.png" },

				//{ "pos": [-295, 60, 64], "title": "Iskall's monstrosity/monolith", "icon": "iskall.png" },

				{ "pos": [0, -1655, 64], "title": "inventory management is my passion \:\)", "icon": "joe.png" },

				{ "pos": [-540, -100, 64], "title": "Hermit Post Co.", "icon": "pearl.png" },

				{ "pos": [-574, 741, 64], "title": "Xisuma's brewery", "icon": "xisuma.png" },

				{ "pos": [284, -2435, 64], "title": "Xisuma's pixel art", "icon": "xisuma.png" },
				
				{ "pos": [0, 0, 64], "title": "Original world spawn (0, 0)", "icon": "poi.png" },

				{ "pos": [-456, -104, 64], "title": "World spawn", "icon": "poi.png" },

				{ "pos": [-925, 725, 64], "title": "2024 Gamers' Outreach obelisk monument", "icon": "poi.png" },

				{ "pos": [-1400, -700, 64], "title": "2025 Gamers' Outreach bridge monument", "icon": "poi.png" },

				{ "pos": [393, -73, 64], "title": "Christmas tree", "icon": "poi.png" },
				
				{ "pos": [7, -29999800, 64], "title": "Department of Hermit Permits, Exile branch", "icon": "poi.png" },

				{ "pos": [267, -29999757, 64], "title": "Exile camp", "icon": "poi.png" },
				
				//{ "pos": [-295, 60, 64], "title": "Iskall's monstrosity/monolith", "icon": "iskall.png" },

				{ "pos": [-358, -154, 64], "title": "Hermitcraft Fanart Gallery", "icon": "poi.png" },
				
				{ "pos": [-670, -485, 64], "title": "Magic Mountain volcano/void hole", "icon": "poi.png" },

				{ "pos": [-296, 194, 64], "title": "The Neighbo(u)rhood portal", "icon": "poi.png" },

				{ "pos": [37, 197, 64], "title": "POE headquarters", "icon": "poi.png" },

				{ "pos": [180, 212, 64], "title": "Shopping district portal", "icon": "poi.png" },
				
				
			],
		},
	},
];
