var jBinary = require('jBinary'),
	midiTypeset = require('./midi-typeset.js'),
	MidiObject = require('./midi-object.js');

function midiJsUtils() {
	function load(url, cb) {
		jBinary.load(url, midiTypeset, function(err, binary) {
			var midiObject = new MidiObject(binary);
			cb(err, midiObject);
		});
	}

	return {
		load: load
	}
}

module.exports = midiJsUtils();