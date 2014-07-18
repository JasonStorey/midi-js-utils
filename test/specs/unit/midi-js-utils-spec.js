describe('midi-js-utils', function() {

	var midiJsUtils,
		mockJBinary;

	beforeEach(function() {
		mockJBinary = {
			load: sinon.stub()
		};

		mockMidiTypeset = {
			fake: ['things']
		};

		midiJsUtils = proxyquire.noCallThru().load('../src/midi-js-utils.js', {
            'jBinary': mockJBinary,
            './midi-typeset.js': mockMidiTypeset
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

		it('calls callback with error and binary', function() {
			var url = 'http://test.mid',
				error = null,
				binary = 'some midi data',
				callback = sinon.stub();

			mockJBinary.load.callsArgWith(2, error, binary);
			
			midiJsUtils.load(url, callback);
			
			expect(mockJBinary.load).to.have.been.calledOnce;
			expect(callback).to.have.been.calledOnce;
			expect(callback).to.have.been.calledWith(error, binary);
		});
	});
});