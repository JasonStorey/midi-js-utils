var jBinary = require('jBinary');

module.exports = {
	'jBinary.all': 'File',
	'jBinary.littleEndian': false,
  	File: {
  		header: {
  			type: ['string', 4, 'binary'],
  			length: 'uint32',
  			format: 'uint16',
  			ntracks: 'uint16',
  			division: {
  				format: ['enum', 1, {
  					0: 'tpq',
  					1: 'mtc'
  				}],
  				tpq: jBinary.Template({
  					baseType: 'uint16',
  					read: function(context) {
  						this.binary.seek(this.binary.tell() - 1);
              // TODO: Investigate jBinary's use of Request. Response type is string, not array buffer.
  						return this.baseRead() & 0x7fff;
  					}
  				}),
  				mtc: {
  					smpte: jBinary.Template({
  						baseType: 'uint8',
  						read: function(context) {
  							this.binary.seek(this.binary.tell() - 2);
  							return this.baseRead() & 0x7f00;
  						}
  					}),
  					tpf: 'uint8'
  				}
  			}
  		}
  	}
};