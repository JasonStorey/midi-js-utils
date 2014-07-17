describe('midi-js-utils', function() {

	var midiJsUtils,
		mockJBinary;

	beforeEach(function() {
		mockJBinary = {
			load: sinon.stub()
		};

		midiJsUtils = proxyquire.noCallThru().load('../src/midi-js-utils.js', {
            'jBinary': mockJBinary
        });
	});
	
	describe('load', function() {
		it('calls jBinary.load with url and callback', function() {
			var url = 'http://test.mid',
				callback = sinon.stub();

			midiJsUtils.load(url, callback);
			
			expect(mockJBinary.load).to.have.been.calledOnce;
			expect(mockJBinary.load).to.have.been.calledWith(url, sinon.match.func);
		});

		it('calls callback with error and data', function() {
			var url = 'http://test.mid',
				error = null,
				data = 'some midi data',
				callback = sinon.stub();

			mockJBinary.load.callsArgWith(1, error, data);
			
			midiJsUtils.load(url, callback);
			
			expect(callback).to.have.been.calledOnce;
			expect(callback).to.have.been.calledWith(error, data);
		});
	});
});