module.exports = {
	'jBinary.all': 'File',
	'jBinary.littleEndian': false,
  	File: {
  		header: {
  			chunkType: ['string', 4, 'binary'],
  			length: 'uint32',
  			format: 'uint16',
  			ntracks: 'uint16'
  		}
  	}
};