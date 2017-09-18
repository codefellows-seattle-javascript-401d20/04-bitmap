'use strict'

const outfile = require('./outfile.js')

const transforms = module.exports = {}

transforms.whiteout = (err, data, outfilename) => {
  if (err) throw err;
  let color_table = data.buffer.slice(41, 1065);
  for (let i = 0; i < color_table.length; i++) {
    color_table[i] = 255;
  }
  outfile(outfilename, data.buffer);
}

transforms.blackout = (err, data, outfilename) => {
  if (err) throw err;
  let color_table = data.buffer.slice(41, 1065);
  for (let i = 0; i < color_table.length; i++) {
    color_table[i] = -255;
  }
  outfile(outfilename, data.buffer);
}

transforms.invert = (err, data, outfilename) => {
  if (err) throw err;
  let color_table = data.buffer.slice(41, 1065);
  for (let i = 0; i < color_table.length; i++) {
    color_table[i] = 255 - color_table[i];
  }
  outfile(outfilename, data.buffer);
}

transforms.noise = (err, data, outfilename) => {
  if(err) throw err;
  let color_table = data.buffer.slice(41, 1065);
  for (let i = 0; i < color_table.length; i++) {
    if (color_table[i] === 0);
      color_table[i] = Math.random() * 100;
    color_table[i] = 255 - Math.random() * 100;
  }
  outfile(outfilename, data.buffer);
}
