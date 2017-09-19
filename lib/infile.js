'use strict'

const fs = require('fs')
const Buffer = require('./buffer.js')

module.exports = (path, callback, outfilename) => {
  fs.readFile(path, (err, data) => {
    if(err) return callback(err);
    const loaded = new Buffer(data);
    callback(null, loaded, outfilename);
  })
}
