import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  icon: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Picture'
  },

  content: {
    type: 'String'
  },

  previews: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Picture'
  }],

  categories: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }],

  users: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

schema.virtual('comments', {// 该图片的评论
  localField: '_id',
  foreignField: 'picture',
  jsutOne: false,
  ref: 'Comment'
})

const Picture = mongoose.model('Picture', schema, 'pictures')

export default Picture
