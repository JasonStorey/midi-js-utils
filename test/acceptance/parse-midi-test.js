describe('Parse MIDI Test', function() {
	var midiJsUtils = require('../../index.js'),
        utils = require('./test-utils');

	it('parses header chunk', function(done) {
		midiJsUtils.load('./test/resources/zelda.mid', function(err, midi) {
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

            utils.tryAndCatch(function() {
                expect(header).to.deep.equal(expectedHeader);
            }, done);
		});
	});
});
