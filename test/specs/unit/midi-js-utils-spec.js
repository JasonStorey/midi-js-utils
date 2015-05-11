describe('midi-js-utils', function() {

	var midiJsUtils,
		mockJBinary,
		mockMidiObject,
		mockMidiObjectConstructor;

	beforeEach(function() {
		mockJBinary = {
			load: sinon.stub()
		};

		mockMidiTypeset = {
			fake: ['things']
		};

		mockMidiObject = {};
		mockMidiObjectConstructor = sinon.stub().returns(mockMidiObject);

		midiJsUtils = proxyquire.noCallThru().load('../lib/midi-js-utils.js', {
            'jBinary': mockJBinary,
            './midi-typeset.js': mockMidiTypeset,
            './midi-object.js': mockMidiObjectConstructor
        });
	});
	
	describe('load', function() {
		it('calls jBinary.load with url, typeset, and callback', function() {
			var url = 'http://test.mid',
				callback = sinon.stub();

			midiJsUtils.load(url, callback);
			
			expect(mockJBinary.load).to.have.been.calledOnce;
			expect(mockJBinary.load).to.have.been.calledWith(url, mockMidiTypeset, sinon.match.func);
		});

		it('calls callback with error and midi object', function() {
			var url = 'http://test.mid',
				error = null,
				binaryObject = 'some midi data',
				callback = sinon.stub();

			mockJBinary.load.callsArgWith(2, error, binaryObject);
			
			midiJsUtils.load(url, callback);

			expect(mockJBinary.load).to.have.been.calledOnce;
			expect(mockMidiObjectConstructor).to.have.been.calledOnce;
			expect(mockMidiObjectConstructor).to.have.been.calledWith(binaryObject);
			expect(callback).to.have.been.calledOnce;
			expect(callback).to.have.been.calledWith(error, mockMidiObject);
		});
	});
});