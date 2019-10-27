import { compareSync } from 'bcryptjs'
import assert from 'http-assert'
import jwt from 'jsonwebtoken'
import jwtConfig from '../config/jwt'
import User from '../models/user'
import { validateInput } from '../utils/validate'

// 用户注册
const userSignup = async (req, res, next) => {
  try {
    // 用户输入验证
    const { result, isFlag } = validateInput(req.body)
    assert(isFlag, 400, { message: result.message, err_code: result.err_code })

    const { email, username } = req.body
    // 判断请求参数是否合法非空
    // assert(email, 400, { message: '邮箱不能为空!QAQ', err_code: 1 })
    // assert(username, 400, { message: '用户名不能为空!QAQ', err_code: 1 })
    // assert(password, 400, { message: '密码不能为空!QAQ', err_code: 1 })

    // 判断邮箱是否被占用
    let doc = await User.findOne({
      email
    })
    assert(!doc, 400, { message: '邮箱被注册，请输入其他邮箱!QAQ', err_code: 4 })

    // 判断用户名是否被占用
    doc = await User.findOne({
      username
    })
    assert(!doc, 400, { message: '用户名被注册，请输入其他用户名!QAQ', err_code: 5 })

    doc = await User.create(req.body)
    res
      .status(201)
      .json({
        error_code: 0,
        data: doc,
        message: '注册成功!=。='
      })
  } catch (error) {
    next(error)
  }
}

// 用户登录
const userSignin = async (req, res, next) => {
  try {
    // 用户输入验证
    const { result, isFlag } = validateInput(req.body)
    assert(isFlag, 400, { message: result.message, err_code: result.err_code })

    const { email, username, password } = req.body

    let doc = await User.findOne({
      email
    })

    // 判断邮箱是否存在
    assert(doc, 400, { message: '邮箱不存在，请输入正确邮箱!QAQ', err_code: 6 })

    doc = await User.findOne({
      email,
      username
    }).select('+password') // 将密码字段添加到查询结果中

    // 判断用户名是否存在
    assert(doc, 400, { message: '用户名不存在，请输入正确用户名!QAQ', err_code: 7 })


    // 密码校验
    const isValid = compareSync(password, doc.password)
    assert(isValid, 400, { message: '密码错误，请重新输入!QAQ', err_code: 8 })

    // jwt
    const { secret, options } = jwtConfig
    const objPayload = {
      id: String(doc._id)
    }
    const rowToken = await jwt.sign(objPayload, secret, options)
    const token = 'Bearer ' + rowToken

    res
      .status(200)
      .json({
        error_code: 0,
        data: doc,
        token,
        message: '登录成功!=。='
      })
  } catch (error) {
    next(error)
  }
}

// 用户列表
const getUsers = async (req, res, next) => {
  try {
    const doc = await User.find()

    res
      .status(200)
      .json({
        error_code: 0,
        data: doc
      })
  } catch (error) {
    next(error)
  }
}

// 用户详情
const getUserById = async (req, res, next) => {
  try {
    const doc = await User.findById(req.params.id)
    assert(doc, 400, { message: '获取数据失败!QAQ', err_code: 9 })

    res.json({
      error_code: 0,
      data: doc
    })
  } catch (error) {
    next(error)
  }
}

// 修改用户
const updateUser = async (req, res, next) => {
  try {
    // 用户输入验证
    const { result, isFlag } = validateInput(req.body)
    assert(isFlag, 400, { message: result.message, err_code: result.err_code })

    const doc = await User.findByIdAndUpdate(req.params.id, req.body)
    assert(doc, 400, { message: '操作失败!QAQ', err_code: 10 })
    res.json({
      error_code: 0,
      data: doc,
      message: '操作成功!=。='
    })
  } catch (error) {
    next(error)
  }
}


// 删除用户
const deleteUser = async (req, res, next) => {
  try {
    const doc = await User.findByIdAndDelete(req.params.id)
    assert(doc, 400, { message: '操作失败!QAQ', err_code: 11 })
    res.json({
      error_code: 0,
      data: doc,
      message: '操作成功!=。='
    })
  } catch (error) {
    next(error)
  }
}


export default {
  userSignup,
  userSignin,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
}
