describe('Load remote MIDI Test', function() {
	var midiJsUtils = require('../../index.js'),
        utils = require('./test-utils');

    it('calls callback with error when load fails', function(done) {
        midiJsUtils.load('./does/not/exist', function(err, midi) {
            utils.tryAndCatch(function(){
                expect(err).to.be.defined;
                expect(midi).to.be.null;
            }, done);
        });
    });

	it('calls callback with midi file when load succeeds', function(done) {
		midiJsUtils.load('./test/resources/zelda.mid', function(err, midi) {
            utils.tryAndCatch(function() {
                expect(err).to.be.null;
                expect(midi).to.be.defined;
            }, done);
		});
	});
});
