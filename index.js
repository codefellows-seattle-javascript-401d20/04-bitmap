'use strict'

const infile = require('./lib/infile.js');
const transforms = require('./lib/transforms.js');

if (process.argv[2] && process.argv[3] && process.argv[4]) {
  let infilename = process.argv[2];
  let outfilename = process.argv[3];
  let transform = process.argv[4];
  infile(infilename, transforms[transform], outfilename)
} else {
  throw new Error('infile, outfile, and transform required');
}
