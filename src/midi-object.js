var MidiObject = function MidiObject(binary) {
	this.binary = binary;
};

MidiObject.prototype.getHeader = function getHeader() {
	var header = {
		chunkId: this.binary.read('headerChunkId')
	};
	return header;
};


module.exports = MidiObject;