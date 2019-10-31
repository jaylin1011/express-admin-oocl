import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  content: {
    type: 'String',
    required: true
  },

  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },

  article: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Article'
  },

  picture: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Picture'
  }
}, {
  timestamps: true
})
const Comment = mongoose.model('Comment', schema, 'comments')

export default Comment
