/*
 * @author: Caesar
 * @module:
 *
 */

'use strict'

const router     = require('koa-router')()
const controller = require('./sttc.controller')

router.get('/*', controller.index)

module.exports = router
