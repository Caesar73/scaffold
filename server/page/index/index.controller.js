/*
 * @author: Caesar
 * @module:
 *
 */

'use strict'

const config = require('../../config/env')
const mock   = require('./index.mock')

exports.index = async ( ctx ) => {
  ctx.status = 200
  await ctx.render('page/index/index', mock)
}

