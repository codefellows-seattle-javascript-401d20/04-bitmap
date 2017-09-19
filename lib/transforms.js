'use strict';

const outfile = require('./outfile.js');

const transforms = module.exports = {};

transforms.whiteout = (err, data, outfilename) => {
  if (err) throw err;
  let colorTable = data.buffer.slice(54, 1078);
  for (let i = 0; i < colorTable.length; i++) {
    colorTable[i] = 255;
  }
  outfile(outfilename, data.buffer, console.error);
}

transforms.blackout = (err, data, outfilename) => {
  if (err) throw err;
  let colorTable = data.buffer.slice(54, 1078);
  for (let i = 0; i < colorTable.length; i++) {
    colorTable[i] = -255;
  }
  outfile(outfilename, data.buffer, console.error);
}

transforms.invert = (err, data, outfilename) => {
  if (err) throw err;
  let colorTable = data.buffer.slice(54, 1078);
  for (let i = 0; i < colorTable.length; i++) {
    colorTable[i] = 255 - colorTable[i];
  }
  outfile(outfilename, data.buffer);
}

transforms.noise = (err, data, outfilename) => {
  if(err) throw err;
  let colorTable = data.buffer.slice(54, 1078);
  for (let i = 0; i < colorTable.length; i++) {
    if (colorTable[i] === 0);
      colorTable[i] = Math.random() * 100;
    colorTable[i] = 255 - Math.random() * 100;
  }
  outfile(outfilename, data.buffer, console.error);
}
