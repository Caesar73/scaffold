/*
 * @author: Caesar
 * @module:
 *
 */

'use strict'

const router = require('koa-router')()
const controller = require('./user.controller')

router.get('/getCaptcha', controller.getCaptcha)
router.get('/me', controller.getMe)

module.exports = router
