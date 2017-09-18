'use strict';

// Require each transform modules here...
const grayscale = require(`./transformations/grayscale.js`);
const rainbow = require(`./transformations/rainbow.js`);
const noise = require('./transformations/noise.js');
const red = require('./transformations/red.js');
const blue = require('./transformations/blue.js');
const green = require('./transformations/green.js');
const cyan = require('./transformations/cyan.js');
const magenta = require('./transformations/magenta.js');
const yellow = require('./transformations/yellow.js');
const flipUp = require('./transformations/flipUp.js');
const mirror = require('./transformations/mirror.js');
const invert = require('./transformations/invert.js');

module.exports = (object, option) => {
  // Parse the transform flags/options and call their respective modules for transformation of the object.

  switch(option) {
  case 'grayscale':
    grayscale(object);
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
  case 'cyan':
    cyan(object);
    break;
  case 'magenta':
    magenta(object);
    break;
  case 'yellow':
    yellow(object);
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

};
