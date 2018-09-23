const urlMaps = module.exports = [
	{
		test: 'Linkify the following URL:www.google.com/',
		value: 'www.google.com/'
	},
	{
		test: 'htt://goo.com',
		value: 'goo.com'
	},
	{
		test: 'Hello,http://google.com.',
		value: 'http://google.com'
	},
	{
		test: 'https://www.goOgle.com./?q=hello',
		value: 'https://www.goOgle.com'
	},
	{
		test: 'http://www.foo.bar./',
		value: 'http://www.foo.bar'
	}
];