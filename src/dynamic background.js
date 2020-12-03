/**
🖼
@file dynamic background
@summary HTML background matching bitsy background
@license MIT
@version auto
@author Sean S. LeBlanc

@description
Updates the background of the html body to match the background colour of the bitsy palette.

HOW TO USE:
Copy-paste this script into a script tag after the bitsy source
*/
import bitsy from 'bitsy';
import { after } from './helpers/kitsy-script-toolkit';
import { getRoom } from './helpers/utils';

export var hackOptions = {
	// which palette colour to use for the background
	// 	0 = background
	// 	1 = tile
	// 	2 = sprite
	default: 0,
	// entries here will override the default for the given room
	byRoom: {
		// examples:
		// 0: 2
		// 'my room': 1
	},
};

// expand the map to include ids of rooms listed by name
after('load_game', function () {
	var room;
	Object.keys(hackOptions.byRoom).forEach(function (i) {
		room = getRoom(i);
		if (room) {
			hackOptions.byRoom[room.id] = hackOptions.byRoom[i];
		}
	});
});

after('initRoom', function (roomId) {
	// get the palette colour
	var c = hackOptions.byRoom[roomId];
	if (c === undefined) {
		c = hackOptions.default;
	}

	// if the palette changed, update background
	var bg = 'rgb(' + bitsy.getPal(bitsy.room[roomId].pal)[c].join(',') + ')';
	if (document.body.style.background !== bg) {
		document.body.style.background = bg;
	}
});
