describe('midi-js-utils', function() {
	describe('Load remote midi file test', function() {
		var midiJsUtils = require('../../../src/midi-js-utils.js');

		it('loads midi file and parses header chunk id', function(done) {
			midiJsUtils.load('http://localhost:8000/test/resources/zelda.mid', function(err, midi) {
				expect(err).to.be.null;
				expect(midi.read('headerChunkId')).to.equal('MThd');
				done();
			});
		});
	});
});



