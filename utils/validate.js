import Validator from 'validator' // 字符串规则校验工具库

// 数据非空校验
const isEmpty = (value) => {
  return (
    value === undefined
    || value === null
    || (typeof value === 'object' && Object.keys(value).length === 0)
    || (typeof value === 'string' && value.trim().length === 0)
  )
}

// 用户登录注册输入校验
const validateInput = (data) => {
  let { email, username, password } = data
  const result = {}

  // 数据初始化为字符串
  email = !isEmpty(email) ? email : ''
  username = !isEmpty(username) ? username : ''
  password = !isEmpty(password) ? password : ''

  // 邮箱验证
  if (!Validator.isEmail(email)) {
    result.err_code = 1
    result.message = '邮箱格式不正确!QAQ'

  } else if (!Validator.isLength(username, { min: 1, max: 30 })) { // 用户名验证
    result.err_code = 2
    result.message = '用户名长度应在1到30个字符之间!QAQ'

  } else if (!Validator.isLength(password, { min: 3, max: 30 })) { // 密码验证
    result.err_code = 3
    result.message = '密码长度应在3到30个字符之间!QAQ'
  }
  // else if(!Validator.equals(password, password2)){
  //   result.err_code = 4
  //   result.message = '两次密码输入不一致!QAQ'
  // }
  const isFlag = isEmpty(result)
  return {
    result,
    isFlag
  }
}

export {
  isEmpty,
  validateInput
}
