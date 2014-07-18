var midiJsUtils = require('../../../src/midi-js-utils.js');

midiJsUtils.load('http://localhost:8000/test/resources/zelda.mid', function(err, midi) {
	console.log(err);
	console.log(midi);
});