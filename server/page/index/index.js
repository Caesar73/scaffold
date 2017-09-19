/*
 * @author: Caesar
 * @module:
 *
 */

'use strict'

const router     = require('koa-router')()
const controller = require('./index.controller')

router.get('/',      controller.index)
router.get('/index', controller.index)

module.exports = router

/*

res.render("index", {title: "xtpl engine!"})

 */





