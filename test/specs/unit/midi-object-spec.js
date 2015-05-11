describe('midi-object', function() {
	var MidiObject = require('../../../lib/midi-object.js'),
		mockBinary,
		mockFile;

	beforeEach(function() {
		mockBinary = {
			read: sinon.stub()
		};
		mockFile = {
			header: {
				type: 'MThd',
				length: 6,
				format: 0,
				ntracks: 100
			}
		};
		mockBinary.read.withArgs('File').returns(mockFile);
	});
	
	describe('constructor', function() {
		it('stores binary object', function() {
			var midiObject = new MidiObject(mockBinary);
			expect(midiObject.binary).to.equal(mockBinary);
		});

		it('stores File object', function() {
			var midiObject = new MidiObject(mockBinary);
			expect(midiObject.File).to.equal(mockFile);
		});
	});

	describe('getHeader', function() {
		it('returns header object', function() {
			var midiObject = new MidiObject(mockBinary),
				headerObject = midiObject.getHeader();

			expect(headerObject).to.deep.equal(mockFile.header);
		});
	});
});