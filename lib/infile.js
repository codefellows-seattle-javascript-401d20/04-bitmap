'use strict'

const fs = require('fs')

module.exports = (path, callback, outfile) => {
  fs.readFile(path, (err, data) => {
    if(err) return callback(err)
    // console.log('buffer: ', data)
    // console.log('type: ', data.slice(0, 2).toString())
    // console.log('size in bytes: ', data.readUInt32LE(2))
    // console.log('pixel array offset: ', data.readUInt32LE(10))
    // console.log('size of header: ', data.readUInt32LE(14))
    // console.log('width in pixels: ', data.readUInt32LE(18))
    // console.log('height in pixels: ', data.readUInt32LE(22))
    // console.log('color planes: ', data.readUInt16LE(26))
    // console.log('bits per pixel: ', data.readUInt16LE(28))
    // console.log('compression method: ', data.readUInt16LE(30))
    // console.log('image size: ', data.readUInt32LE(34))
    // console.log('horizontal resolution: ', data.readUInt32LE(38))
    // console.log('vertical resolution: ', data.readUInt32LE(42))
    // console.log('number of colors in the color palette: ', data.readUInt32LE(46))
    // console.log('number of important colors used: ', data.readUInt32LE(50))
    callback(null, data, outfile)
  })
}
