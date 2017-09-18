'use strict';

const fs = require('fs');
const BitMapImage = require('../lib/BitMapImage.js');

describe('BitMapImage', () => {

  test('BitMapImage should return a BitMapImage object with correct data for house.bmp.', (done) => {
    fs.readFile(`${__dirname}/../../asset/house.bmp`, (err, data) => {
      if(err)
        throw new Error('Usage: node index.js <input filename> <output filename> <transformation>');
      let result = new BitMapImage(data);
      expect(err).toBeNull();
      expect(result.header).toEqual('BM');
      expect(result.size).toEqual(66616);
      expect(result.imageWidth).toEqual(256);
      expect(result.imageHeight).toEqual(256);
      expect(result.bitsPerPix).toEqual(8);
      expect(result.sizeOfHeader).toEqual(40);
      expect(result.pixelArrayOffset).toEqual(1078);
      expect(result.pixelArraySize).toEqual(65536);
      expect(result.colorTableSize).toEqual(1024);
      expect(result.colorTableOffset).toEqual(54);
      done();
    });
  });

  test('BitMapImage should return a BitMapImage object with correct data for bitmap.bmp.', (done) => {
    fs.readFile(`${__dirname}/../../asset/bitmap.bmp`, (err, data) => {
      if(err)
        throw new Error('Usage: node index.js <input filename> <output filename> <transformation>');
      let result = new BitMapImage(data);
      expect(err).toBeNull();
      expect(result.header).toEqual('BM');
      expect(result.size).toEqual(11078);
      expect(result.imageWidth).toEqual(100);
      expect(result.imageHeight).toEqual(100);
      expect(result.bitsPerPix).toEqual(8);
      expect(result.sizeOfHeader).toEqual(40);
      expect(result.pixelArrayOffset).toEqual(1078);
      expect(result.pixelArraySize).toEqual(10000);
      expect(result.colorTableSize).toEqual(1024);
      expect(result.colorTableOffset).toEqual(54);
      done();
    });
  });
});
