import { classify } from 'inflection'
import mongoose from 'mongoose'

const formatModel = async (req, res, next) => {
  const modelName = classify(req.params.model)
  // req.Model = await import(`../models/${ modelName }`)
  req.Model = mongoose.model(modelName)
  next()
}

export default formatModel
