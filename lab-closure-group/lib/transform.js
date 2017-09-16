'use strict';

// Require each transform modules here...
const invert = require(`./transformations/invert.js`);
const grayscale = require(`./transformations/grayscale.js`);
const rainbow = require(`./transformations/rainbow.js`);
const noise = require('./transformations/noise.js');
const red = require('./transformations/red.js');
const blue = require('./transformations/blue.js');
const green = require('./transformations/green.js');
const flipUp = require('./transformations/flipUp.js');
const mirror = require('./transformations/mirror.js');

module.exports = (object, option) => {
  // Parse the transform flags/options and call their respective modules for transformation of the object.
  // Maybe a switch statement? IDK..

  switch(option) 
  case 'invert':
    invert(object);
    break;
  case 'invert':
    invert(object);
    break;
  case 'rainbow':
    rainbow(object);
    break;
  case 'noise':
    noise(object);
    break;
  case 'red':
    red(object);
    break;
  case 'blue':
    blue(object);
    break;
  case 'green':
    green(object);
    break;
  case  'flipUp':
    flipUp(object);
    break;
  case  'mirror':
    mirror(object);
    break;
  default:
    break;
  }

  // object.colorTable.fill(150);

};
