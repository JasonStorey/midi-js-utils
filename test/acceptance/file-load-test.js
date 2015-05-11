describe('Load remote midi file test', function() {
	var midiJsUtils = require('../../index.js');

    function tryAndCatch(func, done) {
        try {
            func();
            done();
        } catch (e) {
            done(e);
        }
    }

    it('calls callback with error when load fails', function(done) {
        midiJsUtils.load('./does/not/exist', function(err, midi) {
            tryAndCatch(function(){
                expect(err).to.be.defined;
                expect(midi).to.be.null;
            }, done);
        });
    });

	it('loads midi file and parses header chunk', function(done) {
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

            tryAndCatch(function(){
                expect(err).to.be.null;
                expect(header).to.deep.equal(expectedHeader);
            }, done);
		});
	});
});
