import {
  getAll,
  getOnelById,
  updateOneById,
  deleteOneById,
  createOne,
} from './common'
import Article from '../models/article'

// 分类列表
const getArticles = getAll(Article)

// 分类详情
const getArticleById = getOnelById(Article)

// 添加分类
const createArticle = createOne(Article)

// 删除分类
const deleteArticleById = deleteOneById(Article)

// 修改分类
const updateArticleById = updateOneById(Article)

export default {
  getArticles,
  getArticleById,
  updateArticleById,
  deleteArticleById,
  createArticle,
}
