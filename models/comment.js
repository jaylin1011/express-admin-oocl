import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: 'String',
    required: true
  }
}, {
  timestamps: true
})

schema.virtual('article', {// 本评论的归属
  localField: '_id',
  foreignField: 'comments',
  jsutOne: true,
  ref: 'Article'
})

const Comment = mongoose.model('Comment', schema, 'commrents')

export default Comment
