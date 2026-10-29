export const site = {
	name: 'Northside Music Rooms',
	tagline: 'Lessons & rehearsal space in Brunswick',
	suburb: 'Brunswick',
	phoneDisplay: '(03) 9380 4411',
	phoneHref: 'tel:+61393804411',
	email: 'hello@northsidemusicrooms.demo',
	address: '48 Sydney Rd, Brunswick VIC 3056',
} as const;

export const builder = {
	name: 'Beau',
	email: 'krs.beau@gmail.com',
	phoneDisplay: '0450 121 047',
	phoneHref: 'tel:+61450121047',
} as const;

export const lessons = [
	{ name: 'Guitar (30 min)', price: '$48', blurb: 'Acoustic or electric — beginner through intermediate.' },
	{ name: 'Piano (30 min)', price: '$52', blurb: 'Classical or contemporary, kids and adults.' },
	{ name: 'Vocals (45 min)', price: '$68', blurb: 'Technique, repertoire, and performance prep.' },
	{ name: 'Band rehearsal room', price: '$35 / hr', blurb: 'Sound-treated room, PA available on request.' },
] as const;

export const teachers = [
	{ name: 'Alex Rivera', focus: 'Guitar & songwriting', bio: 'Touring player with 10+ years teaching experience.' },
	{ name: 'Priya Nair', focus: 'Piano', bio: 'AMEB exam prep and adult beginners welcome.' },
	{ name: 'Chris Walsh', focus: 'Vocals', bio: 'Musical theatre and contemporary pop coaching.' },
] as const;
