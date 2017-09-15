'use strict';

module.exports = (inputFile) => {
  let parsedData = {};
  let buf = Buffer.from(inputFile);
  parsedData.header = buf.toString('utf8', 0, 2);
  parsedData.size = buf.readUInt32LE(2);
  parsedData.imageWidth = buf.readUInt32LE(18);
  parsedData.imageHeight = buf.readUInt32LE(22);
  parsedData.bitsPerPix = buf.readUInt16LE(28);
  parsedData.sizeOfHeader = buf.readUInt32LE(14);
  parsedData.pixelArrayOffset = buf.readUInt32LE(10);
  return parsedData;
};
