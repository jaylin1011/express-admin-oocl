// 封装部分通用的数据库操作
import assert from 'http-assert'

// 查询数量
const getCount = (Model, queryConditions = {}) => async (req, res, next) => {
  try {
    const doc = await Model.count().where(queryConditions)
    assert(doc, 400, { message: '获取数量失败!QAQ', err_code: 9 })
    res
      .status(200)
      .json({
        error_code: 0,
        data: doc
      })
  } catch (error) {
    next(error)
  }
}

// 查询所有符合条件的数据
const getAll = (Model, options = {}) => async (req, res, next) => {
  try {
    const { queryConditions = {}, queryOptions = {} } = options
    const doc = await Model.find().where(queryConditions).setOptions(queryOptions)
    assert(doc, 400, { message: '获取数据失败!QAQ', err_code: 9 })
    res
      .status(200)
      .json({
        error_code: 0,
        data: doc
      })
  } catch (error) {
    next(error)
  }
}

// 详情查询
const getOnelById = (Model, queryOptions = {}) => async (req, res, next) => {
  try {
    const doc = await Model.findById(req.params.id).setOptions(queryOptions)
    assert(doc, 400, { message: '获取数据失败!QAQ', err_code: 9 })

    res.json({
      error_code: 0,
      data: doc
    })
  } catch (error) {
    next(error)
  }
}

// 添加数据
const createOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.create(req.body)
    assert(doc, 400, { message: '添加数据失败!QAQ', err_code: 9 })

    res.json({
      error_code: 0,
      data: doc,
      message: '操作成功!=。='
    })
  } catch (error) {
    next(error)
  }
}

// 更新数据
const updateOneById = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body)
    assert(doc, 400, { message: '操作失败!QAQ', err_code: 10 })

    res.json({
      error_code: 0,
      data: doc,
      message: '操作成功!=。='
    })
  } catch (error) {
    next(error)
  }
}

// 删除数据
const deleteOneById = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id)
    assert(doc, 400, { message: '操作失败!QAQ', err_code: 11 })
    res.json({
      error_code: 0,
      data: doc,
      message: '操作成功!=。='
    })
  } catch (error) {
    next(error)
  }
}

// 数据重复校验
const validUnique = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findOne(req.body)
    assert(!doc, 400, { message: '该数据已存在，请使用其他数据!QAQ', err_code: 5 })
    next()
  } catch (error) {
    next(error)
  }
}

export {
  getAll,
  getOnelById,
  updateOneById,
  deleteOneById,
  createOne,
  validUnique,
  getCount
}
