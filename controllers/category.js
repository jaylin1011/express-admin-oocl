import {
  getAll,
  getOnelById,
  updateOneById,
  deleteOneById,
  createOne,
  validUnique
} from './common'
import Category from '../models/category'

// 分类列表
const getCategories = getAll(Category)

// 分类详情
const getCategoryById = getOnelById(Category)

// 添加分类
const createCategory = createOne(Category)

// 删除分类
const deleteCategoryById = deleteOneById(Category)

// 修改分类
const updateCategoryById = updateOneById(Category)
// const updateCategoryById = async (req, res, next) => {
//   try {
//     let doc = await Category.find(req.body)
//     assert(!doc, 400, { message: '该分类已存在，请添加其他分类!QAQ', err_code: 5 })

//     doc = await Category.findByIdAndUpdate(req.params.id, req.body)
//     assert(doc, 400, { message: '操作失败!QAQ', err_code: 10 })
//     res.json({
//       error_code: 0,
//       data: doc,
//       message: '操作成功!=。='
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// 校验分类是否重复
const checkUnique = validUnique(Category)

export default {
  getCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  createCategory,
  checkUnique
}
