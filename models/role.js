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
    default: '3'
  },
  authorities: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Authority'
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

const Role = mongoose.model('Role', schema, 'roles')

export default Role

