'use strict';

const reader = require('../lib/reader.js');
const parser = require('../lib/parser.js');
const BitMapImage = require('../lib/BitMapImage.js');

describe('BitMapImage', () => {

  test('BitMapImage should return a BitMapImage object with correct data for house.bmp.', (done) => {
    reader(`${__dirname}/../../asset/house.bmp`, (err, data) => {
      let parsedData = parser(data);
      let result = new BitMapImage(parsedData);
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
    reader(`${__dirname}/../../asset/bitmap.bmp`, (err, data) => {
      let parsedData = parser(data);
      let result = new BitMapImage(parsedData);
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
