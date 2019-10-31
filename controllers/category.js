import {
  getAll,
  getOnelById,
  updateOneById,
  deleteOneById,
  createOne,
  validUnique,
  getCount
} from './common'
import Category from '../models/category'

// 分类数量
const countCategories = getCount(Category)

// 分类列表
const getCategories = getAll(Category, {
  queryOptions: { populate: 'articles' }
})

// 分类详情
const getCategoryById = getOnelById(Category, {
  populate: 'articles'
})

// 添加分类
const createCategory = createOne(Category)

// 删除分类
const deleteCategoryById = deleteOneById(Category)

// 修改分类
const updateCategoryById = updateOneById(Category)

// 校验分类是否重复
const checkUnique = validUnique(Category)

export default {
  getCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  createCategory,
  checkUnique,
  countCategories
}
