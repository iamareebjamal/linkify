const unmatchingUrls = module.exports = [
	'http://',
	'http://.',
	'http://..',
	'http://../',
	'http://?',
	'http://??',
	'http://??/',
	'http://#',
	'http://##',
	'http://##/',
	'//',
	'//a',
	'///a',
	'///',
	'http:///a',
	'rdar://1234',
	'h://test',
	':// should fail',
	'ftps://foo.bar/',
	'http://3628126748',
	'http://.www.foo.bar/',
	'http://.www.foo.bar./',
	'159.345.332.112',
	'',
	'https://2001:db8:85a3:0:0:8a2e:370:7334?q=345',
	'https://test:ok:',
	'ok.bye'
]
