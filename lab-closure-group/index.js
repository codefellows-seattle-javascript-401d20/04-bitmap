'use strict';

const fs = require('fs');
const BitMapImage = require('./lib/BitMapImage.js');
const transform = require('./lib/transform.js');

const inputFile = process.argv[2];
const outputFile = process.argv[3];
const option = process.argv[4];


fs.readFile(`${__dirname}/../asset/${inputFile}`, (err, data) => {
  if(err)
    return console.log(`Input File: ${inputFile}`);
  let bitMapObj = new BitMapImage(data);
  transform(bitMapObj, option);
  fs.writeFile(`${__dirname}/data/${outputFile}`, bitMapObj.buffer, (err) => {
    if(err)
      return console.log(`Output File: ${outputFile}`);
    console.log('Bitmap created!');
  });
});
