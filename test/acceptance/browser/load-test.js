describe('Load remote midi file test', function() {
	var midiJsUtils = require('../../../src/midi-js-utils.js');

	it('loads midi file and parses header chunk', function(done) {
		midiJsUtils.load('http://localhost:8000/test/resources/zelda.mid', function(err, midi) {
			var expectedHeader = {
				chunkId: 'MThd',
				chunkSize: 6,
				format: 0,
				numberOfTracks: 1
			},
			header = midi.getHeader();
			console.log(header);
			check(done, function() {
				expect(err).to.be.null;
				expect(header).to.deep.equal(expectedHeader);
			});
		});
	});
});