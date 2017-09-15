'use strict'

// const User = mongoose.model('User')
// const Logs = mongoose.model('Logs')
const captcha = require('trek-captcha')
const config  = require('../../config/env')
const mock    = require('./user.mock')

exports.getMe = async ( ctx ) => {
  await ctx.render('user/user', mock)
}

/**
 * 获取验证码
 */
exports.getCaptcha = async (ctx,next)=>{
  const { token, buffer } = await captcha({size:6})
  // ctx.session.captcha = token
  ctx.status = 200
  ctx.body = buffer
}

// exports.getMe = async (ctx,next)=>{
//   const userId = ctx.req.user._id
//   try{
//     const user = await User.findById(userId)
//     ctx.status = 200
//     ctx.body = user.userInfo
//   }catch(err){
//     ctx.throw(err)
//   }
// }
