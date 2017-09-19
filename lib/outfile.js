'use strict'

const fs = require('fs')

module.exports = (path, data, callback) => {
  fs.writeFile(path, data, (err) => {
    if (err) return callback(err);
    console.log('The file has been saved!');
  });
}
