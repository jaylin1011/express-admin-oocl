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
  }
}, {
  timestamps: true
})

schema.virtual('comments', {// 该文章的评论
  localField: '_id',
  foreignField: 'article',
  jsutOne: false,
  ref: 'Comment'
})

const Article = mongoose.model('Article', schema, 'articles')

export default Article
