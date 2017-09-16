'use strict';

// BitMapImage constructor
module.exports = function BitMapImage(data) {
  this.buffer = Buffer.from(data);
  this.header = this.buffer.toString('utf8', 0, 2);
  this.size = this.buffer.readUInt32LE(2);
  this.imageWidth = this.buffer.readUInt32LE(18);
  this.imageHeight = this.buffer.readUInt32LE(22);
  this.bitsPerPix = this.buffer.readUInt16LE(28);
  this.sizeOfHeader = this.buffer.readUInt32LE(14);
  this.colorTableOffset = 54; // Header(14) + DIB(40) size is the offset
  this.colorTableSize = 1024;
  this.pixelArrayOffset = this.buffer.readUInt32LE(10);
  this.pixelArraySize = this.imageWidth * this.imageHeight;
  this.colorTable = this.buffer.slice(54, 1024+54);
  this.pixelArray = this.buffer.slice(this.pixelArrayOffset, this.pixelArrayOffset + this.pixelArraySize);
};
