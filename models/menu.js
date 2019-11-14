import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  route: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  menus: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Menu'
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
})

const Menu = mongoose.model('Menu', schema, 'menus')

export default Menu
