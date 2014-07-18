describe('midi-object', function() {
	var MidiObject = require('../../../src/midi-object.js'),
		mockBinary;

	beforeEach(function() {
		mockBinary = {
			read: sinon.stub()
		};
	});
	
	describe('constructor', function() {
		it('stores binary object', function() {
			var midiObject = new MidiObject(mockBinary);
			expect(midiObject.binary).to.equal(mockBinary);
		});
	});

	describe('getHeader', function() {
		it('returns header object with chunkId', function() {
			var expectedHeaderChunkId = 'MThd',
				midiObject,
				headerObject;

			mockBinary.read.returns(expectedHeaderChunkId);
			midiObject = new MidiObject(mockBinary);
			headerObject = midiObject.getHeader();

			expect(headerObject.chunkId).to.equal(expectedHeaderChunkId);
		});
	});
});