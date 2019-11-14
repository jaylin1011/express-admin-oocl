import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  level: {
    type: String,
    required: true,
    default: '3'
  },
  parent: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Authority'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

schema.virtual('children', {// 该权限的子权限
  localField: '_id',
  foreignField: 'parent',
  jsutOne: false,
  ref: 'Authority'
})

const Authority = mongoose.model('Authority', schema, 'authorities')

export default Authority

