'use strict';

module.exports = (object) => {
  let length = object.pixelArray.length / 2;
  for (let i = 0; i < length; i++) {
    let change = object.pixelArray.readUInt8(object.pixelArray.length - 1 - i);
    let temp = object.pixelArray.readUInt8(i);
    object.pixelArray.writeUInt8(change, i);
    object.pixelArray.writeUInt8(temp, object.pixelArray.length - 1 - i);
  }
};
