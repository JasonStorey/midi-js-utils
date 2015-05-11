describe('Load remote midi file test', function() {
	var midiJsUtils = require('../../..');

	it('loads midi file and parses header chunk', function(done) {
		midiJsUtils.load('http://localhost:8000/test/resources/zelda.mid', function(err, midi) {
		// midiJsUtils.load('http://localhost:8000/test/resources/test.mid', function(err, midi) {
			var expectedHeader = {
				type: 'MThd',
				length: 6,
				format: 0,
				ntracks: 1,
				division: {
					format: 'tpq',
					tpq: 120,
					mtc: {
						smpte: 0,
						tpf: 120
					}
				}
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