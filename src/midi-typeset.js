module.exports = {
	'jBinary.all': 'File',
	'jBinary.littleEndian': false,
  	File: {
  		header: {
  			chunkId: ['string', 4, 'binary'],
  			chunkSize: 'uint32',
  			format: 'uint16',
  			numberOfTracks: 'uint16'
  		}
  	}
};