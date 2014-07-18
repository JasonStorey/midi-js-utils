describe('Load remote midi file test', function() {
	var midiJsUtils = require('../../../src/midi-js-utils.js');

	it('loads midi file and parses header chunk', function(done) {
		midiJsUtils.load('http://localhost:8000/test/resources/zelda.mid', function(err, midi) {
			var expectedHeader = {
				chunkId: 'MThd',
				chunkSize: 6
			},
			header = midi.getHeader();

			expect(err).to.be.null;
			expect(header).to.deep.equal(expectedHeader);
			console.log(header);
			done();
		});
	});
});