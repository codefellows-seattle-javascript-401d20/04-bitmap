'use strict'

const fs = require('fs')
const loader = require('./buffer.js')

module.exports = (path, callback, outfilename) => {
  fs.readFile(path, (err, data) => {
    if(err) return callback(err);
    const loaded = loader.loadIn(data);
    callback(err, loaded, outfilename);
  })
}
