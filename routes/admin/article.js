import express from 'express'
import articleController from '../../controllers/article'

const router = express.Router()

router
  .get('/', articleController.getArticles)
  .get('/count', articleController.countArticles)
  .get('/:id', articleController.getArticleById)
  .post('/', articleController.createArticle)
  .put('/:id', articleController.updateArticleById)
  .delete('/:id', articleController.deleteArticleById)

export default router
