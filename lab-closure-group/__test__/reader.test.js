'use strict';

const reader = require('../lib/reader.js');

describe('reader', () => {
  test('an invalid path should reject an error', (done) => {
    reader(`${__dirname}/asset/wat.txt`, (err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeUndefined();
      done();
    });
  });

  // Offset for color table = 14(header) + 40 (DIB) = 54
  test('File header bytes should return correct values', (done) => {
    reader(`${__dirname}/../../asset/house.bmp`, (err, data) => {
      let result = Buffer.from(data);
      let headerField = result.toString('utf8', 0, 2);
      let size = result.readUInt32LE(2);
      let offset = result.readUInt32LE(10);
      let width = result.readUInt32LE(18);
      let height = result.readUInt32LE(22);
      let bitsPerPix = result.readUInt16LE(28);
      let sizeOfHeader = result.readUInt32LE(14);
      // let colorTable = result.readUInt8LE(54);
      // let blue = result.readUInt8(54);
      // let green = result.readUInt8(55);
      // let red = result.readUInt8(56);
      let rando = result.readUInt8(58);
      // let PixelArray = result.readUInt8(1078);
      expect(err).toBeNull();
      expect(headerField).toEqual('BM');
      expect(size).toEqual(66616);
      expect(offset).toEqual(1078);
      expect(width).toEqual(256);
      expect(height).toEqual(256);
      expect(bitsPerPix).toEqual(8);
      expect(sizeOfHeader).toEqual(40);
      // expect(blue).toEqual(257);
      // expect(green).toEqual(267);
      // expect(red).toEqual(277);
      expect(rando).toEqual(287);

      // expect(colorTable).toEqual(1);
      // expect(PixelArray).toEqual(1);
      done();
    });
  });
});
