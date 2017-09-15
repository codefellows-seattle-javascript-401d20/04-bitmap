'use strict';

const reader = require('../lib/reader.js');
const parser = require('../lib/parser.js');

describe('parser', () => {

  test('Parser should return object with correct data for house.bmp.', (done) => {
    reader(`${__dirname}/../../asset/house.bmp`, (err, data) => {
      let result = parser(data);
      expect(err).toBeNull();
      expect(result.header).toEqual('BM');
      expect(result.size).toEqual(66616);
      expect(result.imageWidth).toEqual(256);
      expect(result.imageHeight).toEqual(256);
      expect(result.bitsPerPix).toEqual(8);
      expect(result.sizeOfHeader).toEqual(40);
      expect(result.pixelArrayOffset).toEqual(1078);
      done();
    });
  });

  test('Parser should return object with correct data for bitmap.bmp.', (done) => {
    reader(`${__dirname}/../../asset/bitmap.bmp`, (err, data) => {
      let result = parser(data);
      expect(err).toBeNull();
      expect(result.header).toEqual('BM');
      expect(result.size).toEqual(11078);
      expect(result.imageWidth).toEqual(100);
      expect(result.imageHeight).toEqual(100);
      expect(result.bitsPerPix).toEqual(8);
      expect(result.sizeOfHeader).toEqual(40);
      expect(result.pixelArrayOffset).toEqual(1078);
      done();
    });
  });
});
