'use strict'

module.exports = (object) => {
  for (var i = 0; i < object.pixelArray.length; i++) {
    object.pixelArray[i] = 255 - object.pixelArray[i];
  }
};
