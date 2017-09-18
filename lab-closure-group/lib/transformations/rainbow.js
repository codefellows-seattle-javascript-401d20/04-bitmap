'use strict';

module.exports = (object) => {
  for(let i = 0; i < object.colorTable.length; i+=4) {
    let min = Math.ceil(0);
    let max = Math.floor(256);
    let random1 =  Math.floor(Math.random() * (max - min)) + min;
    let random2 =  Math.floor(Math.random() * (max - min)) + min;
    let random3 =  Math.floor(Math.random() * (max - min)) + min;
    let random4 =  Math.floor(Math.random() * (max - min)) + min;

    object.colorTable.writeUInt8(random1, i);
    object.colorTable.writeUInt8(random2, i+1);
    object.colorTable.writeUInt8(random3, i+2);
    object.colorTable.writeUInt8(random4, i+3);
  }

  for(let i = 0; i < object.pixelArray.length; i++) {
    let min = Math.ceil(0);
    let max = Math.floor(256);
    let random =  Math.floor(Math.random() * (max - min)) + min;

    object.pixelArray.writeUInt8(random, i);
  }

};
