'use strict';

// Require each transform modules here...
// const grayscale = require(`./transformations/grayscale.js`);
const invert = require(`./transformations/invert.js`);

module.exports = (object, option) => {
  // Parse the transform flags/options and call their respective modules for transformation of the object.
  // Maybe a switch statement? IDK..

  switch(option) {
  case 'invert':
    invert(object);
    break;
  default:
    break;
  }

  // object.colorTable.fill(150);

};
