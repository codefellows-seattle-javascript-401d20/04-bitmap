'use strict';

module.exports = function(data) {
  this.buffer = data;
  this.type = data.toString('utf8', 0, 2);
  this.sizeInBytes = data.readUInt32LE(2);
  this.pixelArrayOffset = data.readUInt32LE(10);
  this.sizeOfHeader = data.readUInt32LE(14);
  this.widthInPixels = data.readUInt32LE(18);
  this.heightInPixels = data.readUInt32LE(22);
  this.colorPlanes = data.readUInt16LE(26);
  this.bitsPerPixel = data.readUInt16LE(28);
  this.compressionMethod = data.readUInt16LE(30);
  this.imageSize = data.readUInt32LE(34);
  this.horizontalResolution = data.readUInt32LE(38);
  this.verticalResolution = data.readUInt32LE(42);
  this.numColorsInColorPalette = data.readUInt32LE(46);
  this.numImportantColors = data.readUInt32LE(50);
}
