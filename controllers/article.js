import mongoose from 'mongoose'
import {
  getAll,
  getOnelById,
  updateOneById,
  deleteOneById,
  createOne,
  getCount
} from './common'

const Article = mongoose.model('Article')

// 文章数量
const countArticles = getCount(Article)

// 文章列表
const getArticles = getAll(Article, {
  queryOptions: { populate: 'comments' }
})

// 文章详情
const getArticleById = getOnelById(Article, {
  populate: 'comments'
})

// 添加文章
const createArticle = createOne(Article)

// 删除文章
const deleteArticleById = deleteOneById(Article)

// 修改文章
const updateArticleById = updateOneById(Article)

export default {
  getArticles,
  getArticleById,
  updateArticleById,
  deleteArticleById,
  createArticle,
  countArticles
}
