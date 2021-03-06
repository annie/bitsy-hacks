import {
	end,
	press,
	snapshot,
	start,
	walkToCat,
} from './test/bitsy';

test('by room', async () => {
	await start({
		hacks: [
			[
				'backdrops',
				{
					permanent: false,
					backdropsByRoom: {
						0: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', // rgba(255,0,0,0.5) pixel
					},
					backdropTitle: '',
					isTransparent: function () {
						return true;
					},
				},
			],
		],
	});
	await walkToCat();
	await snapshot();
	await press('ArrowRight'); // talk to cat
	await press('Enter'); // complete dialog page
	await snapshot();
	await end();
});

test('title', async () => {
	await start({
		hacks: [
			[
				'backdrops',
				{
					permanent: false,
					backdropsByRoom: {},
					backdropTitle: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', // rgba(255,0,0,0.5) pixel
					isTransparent: function () {
						return true;
					},
				},
			],
		],
	});
	await press('Enter'); // complete dialog page
	await snapshot();
	await press('Enter'); // close dialog
	await snapshot();
	await end();
});

test('permanent', async () => {
	await start({
		hacks: [
			[
				'backdrops',
				{
					permanent: true,
					backdropsByRoom: {},
					backdropTitle: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', // rgba(255,0,0,0.5) pixel
					isTransparent: function () {
						return true;
					},
				},
			],
		],
	});
	await press('Enter'); // complete dialog page
	await snapshot();
	await press('Enter'); // close dialog
	await snapshot();
	await end();
});
