var midiJsUtils = require('../../../src/midi-js-utils.js');

describe('midi-js-utils', function() {
	describe('load', function() {
		it('calls load with correct url', function() {
			var url = 'http://test.mid',
				expectedResult = 'loading ' + url;

			expect(midiJsUtils.load(url)).to.equal(expectedResult);
		});
	});
});