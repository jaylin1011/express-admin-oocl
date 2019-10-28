// 封装部分通用的数据库操作
import assert from 'http-assert'

// 查询所有
const getAll = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.find()
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
const getOnelById = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findById(req.params.id)
    assert(doc, 400, { message: '获取数据失败!QAQ', err_code: 9 })

    res.json({
      error_code: 0,
      data: doc
    })
  } catch (error) {
    next(error)
  }
}

//
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


// 删除用户
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


export {
  getAll,
  getOnelById,
  updateOneById,
  deleteOneById
}
