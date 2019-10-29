import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  categories: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }],

  icon: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Picture'
  },

  previews: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Picture'
  }],

  content: {
    type: 'String'
  },

  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

const Picture = mongoose.model('Picture', schema, 'pictures')

export default Picture
