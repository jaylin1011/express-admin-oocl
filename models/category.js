import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  categories: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }]
}, {
  timestamps: true
})

schema.virtual('articles', {// 分类下的所有文章
  localField: '_id',
  foreignField: 'categories',
  jsutOne: false,
  ref: 'Article'
})

const Category = mongoose.model('Category', schema, 'categories')

export default Category
