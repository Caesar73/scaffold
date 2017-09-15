'use strict'

// 设置默认环境变量
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const Koa   = require('koa')
const views = require('koa-views');
const app   = new Koa()
const path  = require('path')

const config = require('./config/env')
const logger = require('./util/logs')
const errorHandleMiddle = require('./util/error')
// const mongoose = require('./connect')

/*

//xtemplate模板引擎对koa的适配
const xtpl = require('xtpl/lib/koa');
//xtemplate模板渲染
xtpl(app, {
    //配置模板目录，指向工程的view目录
    views: path.join(__dirname, 'page')
});

const xtpl = require('koa-xtpl')
// or options
app.use(xtpl({
  root: path.join(__dirname, 'page'),
  extname: 'xtpl',
  commands: {}
}))

 */

app.use(views(path.join(__dirname, './page'), { extension: 'ejs' }))
// console.log(config.viewDir);

// 初始化数据
// if(config.seedDB) {
//   const initData = require('./config/seed')
//   initData()
// }

//log记录
//router use : this.logger.error('msg')
app.use(async (ctx, next) => {
  ctx.logger = logger
  await next()
})

//错误处理中间件
app.use(errorHandleMiddle())
require('./config/koa')(app)
require('./routes')(app)

//错误监听
app.on('error',(err,ctx)=>{
  if (process.env.NODE_ENV != 'test') {
    console.error('error', err)
  }
})

module.exports = app
