var jBinary = require('jBinary'),
	midiTypeset = require('./midi-typeset.js');

function midiJsUtils() {
	function load(url, cb) {
		jBinary.load(url, midiTypeset, function(err, binary) {
			cb(err, binary);
		});
	}

	return {
		load: load
	}
}

module.exports = midiJsUtils();