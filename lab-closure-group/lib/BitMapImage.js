'use strict';

module.exports = function BitMapImage(data) {
  this.header = data.header;
  this.size = data.size;
  this.imageWidth = data.imageWidth;
  this.imageHeight = data.imageHeight;
  this.bitsPerPix = data.bitsPerPix;
  this.sizeOfHeader = data.sizeOfHeader;
  this.colorTableOffset = 54; // Header(14) + DIB(40) size is the offset
  this.colorTableSize = 1024;
  this.pixelArrayOffset = data.pixelArrayOffset;
  this.pixelArraySize = this.imageWidth * this.imageHeight;
};
