import test from 'ava';
import urlRegex from '../dist/regex'
import matchingUrls from './matching'
import unmatchingUrls from './unmatching'
import urlMaps from './urlmaps'


for (let url of matchingUrls) {
	test('should match ' + url, async t => {
		t.is(url.match(urlRegex)[0], url)
	})
}

for (let url of unmatchingUrls) {
	test('should not match ' + url, async t => {
		t.is(url.match(urlRegex), null)
	})
}

for (let url of urlMaps) {
	test('should partial match ' + url.test, async t => {
		t.is(url.test.match(urlRegex)[0], url.value)
	})
}