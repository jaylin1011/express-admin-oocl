import mongoose from 'mongoose'
import { hashSync, genSaltSync } from 'bcryptjs'
import { BASE_URL } from '../config/constants'

const salt = genSaltSync(10)

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
    set(value) {
      return hashSync(value, salt)
    },
  },

  is_admin: {
    type: Boolean,
    default: false,
  },

  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1,
  },

  avatar: {
    type: String,
    default: `${ BASE_URL }/public/images/avatar.jpg`,
  }
}, {
  timestamps: true,
})

schema.virtual('articles', {// 该用户的文章
  localField: '_id',
  foreignField: 'users',
  jsutOne: false,
  ref: 'Article'
})

schema.virtual('pictures', {// 该用户的图片
  localField: '_id',
  foreignField: 'users',
  jsutOne: false,
  ref: 'Picture'
})

schema.virtual('comments', {// 该用户的评论
  localField: '_id',
  foreignField: 'user',
  jsutOne: false,
  ref: 'Comment'
})

const User = mongoose.model('User', schema, 'users')

export default User
