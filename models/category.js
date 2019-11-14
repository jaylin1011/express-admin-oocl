import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  parent: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

schema.virtual('articles', {// 该分类的文章
  localField: '_id',
  foreignField: 'categories',
  jsutOne: false,
  ref: 'Article'
})

schema.virtual('pictures', {// 该分类的图片
  localField: '_id',
  foreignField: 'categories',
  jsutOne: false,
  ref: 'Picture'
})

schema.virtual('children', {// 该分类的子分类
  localField: '_id',
  foreignField: 'parent',
  jsutOne: false,
  ref: 'Category'
})

const Category = mongoose.model('Category', schema, 'categories')

export default Category
