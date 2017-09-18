'use strict';

const fs = require('fs');
const BitMapImage = require('./lib/BitMapImage.js');
const transform = require('./lib/transform.js');

const inputFile = process.argv[2];
const outputFile = process.argv[3];
const option = process.argv[4];


fs.readFile(`${__dirname}/../asset/${inputFile}`, (err, data) => {
  if(err)
    throw new Error('Usage: node index.js <input filename> <output filename> <transformation>');
  let bitMapObj = new BitMapImage(data);
  transform(bitMapObj, option);
  fs.writeFile(`${__dirname}/data/${outputFile}`, bitMapObj.buffer, (err) => {
    if(err)
      throw new Error('Usage: node index.js <input filename> <output filename> <transformation>');
    console.log('Bitmap created!');
  });
});
