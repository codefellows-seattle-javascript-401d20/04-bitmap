'use strict'

const fs = require('fs')

// //const read = (path, callback) => {
fs.readFile('./__test__/asset/house.bmp', (err, data) => {
  if(err) {
    console.error(err)
    return 
  }
  //console.log('header: ', data.slice(0, 2).toString())
  //console.log('size in bytes: ', data.readUInt32LE(2, 4))
  //console.log(data.readUInt32LE(10, 4))
  //return data

  //slice out the color array and mutate it, and the original buffer is changed
  //
  console.log('buffer: ', data)
  console.log('type: ', data.slice(0, 2).toString())
  console.log('size in bytes: ', data.readUInt32LE(2))
  console.log('pixel array offset: ', data.readUInt32LE(10))
  console.log('size of header: ', data.readUInt32LE(14))
  console.log('width in pixels: ', data.readUInt32LE(18))
  console.log('height in pixels: ', data.readUInt32LE(22))
  console.log('color planes: ', data.readUInt16LE(26))
  console.log('bits per pixel: ', data.readUInt16LE(28))
  console.log('compression method: ', data.readUInt16LE(30))
  console.log('image size: ', data.readUInt32LE(34))
  console.log('horizontal resolution: ', data.readUInt32LE(38))
  console.log('vertical resolution: ', data.readUInt32LE(42))
  console.log('number of colors in the color palette: ', data.readUInt32LE(46))
  console.log('number of important colors used: ', data.readUInt32LE(50))

  let color_table = data.slice(41, 1065)
  for (let i = 0; i < color_table.length; i++) {
    //color_table[i] = -255;
    color_table[i] = 255 - color_table[i];
  }
  console.log(color_table)

  fs.writeFile('./__test__/asset/new_house.bmp', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
})

// fs.writeFile('./__test__/asset/new_house.bmp', './__test__/asset/house.bmp', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
//}
//  module.exports = {
//    read: read, 
//  };

