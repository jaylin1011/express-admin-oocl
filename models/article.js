import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  users: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  }],

  categories: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }],

  // assessments: { // 评价
  //   marks: { type: Number }, // 评分
  //   clicks: { type: Number }, // 点击数
  //   dislikes: { type: Number }, // 差评
  //   stores: { type: Number }, // 收藏数
  //   likes: { type: Number } // 好评
  // },

  icon: {
    type: String,
    default: '/public/images/avatar.jpg'
  },

  content: {
    type: String
  },

  comments: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Comment'
  }],
}, {
  timestamps: true
})

const Article = mongoose.model('Article', schema, 'articles')

export default Article
