'use strict';

module.exports = (object) => {
  for(let i = 0; i < object.colorTable.length; i+=4) {
    let blue = object.colorTable.readUInt8(i);
    let green = object.colorTable.readUInt8(i+1);
    let red = object.colorTable.readUInt8(i+2);

    object.colorTable.writeUInt8(blue, i);
    object.colorTable.writeUInt8(255, i+1);
    object.colorTable.writeUInt8(red, i+2);
  }
};
