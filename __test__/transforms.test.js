'use strict'

const fs = require('fs')

const transforms = require('../lib/transforms.js');

const bitmap_whiteout = fs.readFileSync(`${__dirname}/asset/house_new.bmp`);

describe('transform', () => {
  test('whiteout', (done) => {
    fs.readFile(`${__dirname}/asset/house.bmp`, function(err, data) {
      if (err) throw err
      let old_color_table = data.buffer.slice(41, 1065)
      let new_color_table = bitmap_whiteout.slice(41, 1065)
      expect(old_color_table).not.toEqual(new_color_table);
      done();
    });
  });
});
