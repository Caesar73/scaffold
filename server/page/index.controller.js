/*
 * @author: Caesar
 * @module:
 *
 */

'use strict'

const config = require('../config/env')
const mock   = require('./index.mock')

exports.index = async ( ctx ) => {
  await ctx.render('index', mock)
}

