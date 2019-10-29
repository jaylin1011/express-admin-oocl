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
  },

  comments: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Comment'
  }],

  articles: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Article'
  }]
}, {
  timestamps: true,
})

const User = mongoose.model('User', schema, 'users')

export default User
