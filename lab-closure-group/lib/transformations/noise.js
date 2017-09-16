'use strict';

module.exports = (object) => {
  for(let i = 0; i < object.pixelArray.length; i++) {
    let min = Math.ceil(0);
    let max = Math.floor(256);
    let random =  Math.floor(Math.random() * (max - min)) + min;

    object.pixelArray.writeUInt8(random, i);
  }
};
