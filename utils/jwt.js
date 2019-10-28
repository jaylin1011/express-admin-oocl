import jwt from 'jsonwebtoken'
import jwtConfig from '../config/jwt'

const { secret, options } = jwtConfig

// sign token
const createToken = (payload) => {
  // payload.ctime = Date.now()

  return jwt.sign(payload, secret, options)
}

// verify token
const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, data) => {
      if (error) {
        reject('token验证失败!QAQ')
      }
      resolve(data)
    })
  })
}

export {
  createToken,
  checkToken
}
