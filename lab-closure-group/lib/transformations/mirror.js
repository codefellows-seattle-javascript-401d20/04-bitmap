'use strict';

module.exports = (object) => {
  let length = object.pixelArray.length;
  for(let i = 0; i < length; i++) {
    let change = object.pixelArray.readUInt8(object.pixelArray.length-1-i);
    object.pixelArray.writeUInt8(change, i);
  }
};
