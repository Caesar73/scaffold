/*
 * @author: Caesar
 * @module:
 *
 */

'use strict'

const config = require('../../config/env')
const mock   = require('../index/index.mock')

exports.index = async ( ctx ) => {
  let path = ctx.request.path;
  console.log('static path: ' + path);
  // let stts = ctx.status;
  // console.log('stts: ' + stts);

  if (path.indexOf('static') > -1) {
    let rndrPath = path.split('static')[1];
    console.log('rndrPath: ' + rndrPath);
    rndrPath = 'html' + rndrPath + '' + rndrPath + '.html';
    console.log('rndrPath: ' + rndrPath);
    await ctx.render(rndrPath, mock)
    // await ctx.render('page/index', mock)
    // ctx.body = {status:'success',data:'台湾是中国不可分割的一部分.'}
  }
  else {
    await ctx.render('page/index', mock)
  }

}

