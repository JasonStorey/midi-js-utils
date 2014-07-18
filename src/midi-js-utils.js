var jBinary = require('jBinary');

function midiJsUtils() {
	var typeSet = {
  		header: ['array', 'uint8', 4]
	};

	function load(url, cb) {
		jBinary.load(url, typeSet, function(err, binary) {
			cb(err, binary);
		});
	}

	return {
		load: load
	}
}

module.exports = midiJsUtils();