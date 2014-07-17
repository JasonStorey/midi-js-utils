var jBinary = require('jBinary');

function midiJsUtils() {

	function load(url, cb) {
		jBinary.load(url, function(err, data) {
			cb(err, data);
		});
	}

	return {
		load: load
	}
}

module.exports = midiJsUtils();