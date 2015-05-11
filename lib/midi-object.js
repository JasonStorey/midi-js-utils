var MidiObject = function MidiObject(binary) {
	this.binary = binary;
	this.File = binary.read('File');
};

MidiObject.prototype.getHeader = function getHeader() {
	return this.File.header;
};

module.exports = MidiObject;