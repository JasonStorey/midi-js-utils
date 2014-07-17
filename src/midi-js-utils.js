function midiJsUtils() {

	function load(url) {
		return 'loading ' + url;
	}

	return {
		load: load
	}
}

module.exports = midiJsUtils();