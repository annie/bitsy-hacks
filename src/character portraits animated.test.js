import
	{
		delay,
		end,
		press,
		snapshot,
		start,
		walkToCat
	} from './test/bitsy';

test('autoreset, dialog only', async () => {
	await start({
		catDialog: `{>>
	{SEQ
		{>> {portrait "cat"}portrait applied}
		{>> portrait autoreset}
	}
}`,
		hacks: [['character portraits animated', {
			scale: 1 / 128,
			portraits: {
				cat: 'data:image/gif;base64,R0lGODdhAQABAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJyAAAACwAAAAAAQABAIAAAAD/AAACAkwBACH5BAnIAAAALAAAAAABAAEAgAAAAAD/AAICTAEAOw==', // rgb(255,0,0) for 2s, then rgb(0,255,0)
			},
			autoReset: true,
			dialogOnly: true,
		}]],
	});
	await walkToCat();
	await press('ArrowRight'); // talk to cat
	await press('Enter'); // complete dialog page
	await snapshot();
	await delay(2000);
	await snapshot();
	await press('Enter'); // end dialog page
	await snapshot();
	await end();
});

test('no reset, persist', async () => {
	await start({
		catDialog: `{>>
	{SEQ
		{>> {portrait "cat"}portrait applied}
		{>> {portrait ""}portrait removed}
	}
}`,
		hacks: [['character portraits animated', {
			scale: 1 / 128,
			portraits: {
				cat: 'data:image/gif;base64,R0lGODdhAQABAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJyAAAACwAAAAAAQABAIAAAAD/AAACAkwBACH5BAnIAAAALAAAAAABAAEAgAAAAAD/AAICTAEAOw==', // rgb(255,0,0) for 2s, then rgb(0,255,0)
			},
			autoReset: false,
			dialogOnly: false,
		}]],
	});
	await walkToCat();
	await press('ArrowRight'); // talk to cat
	await press('Enter'); // complete dialog page
	await snapshot();
	await delay(2000);
	await snapshot();
	await press('Enter'); // end dialog page
	await snapshot();
	await press('ArrowRight'); // talk to cat
	await press('Enter'); // complete dialog page
	await snapshot();
	await press('Enter'); // end dialog page
	await snapshot();
	await end();
});
