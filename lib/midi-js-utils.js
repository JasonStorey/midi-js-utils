var jBinary = require('jBinary'),
	midiTypeset = require('./midi-typeset.js'),
	MidiObject = require('./midi-object.js');

function load(url, cb) {
    jBinary.load(url, midiTypeset, function(err, binary) {
        var midiObject = new MidiObject(binary);
        cb(err, midiObject);
    });
}

module.exports = {
    load: load
};
