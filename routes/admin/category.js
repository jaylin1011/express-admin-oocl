import express from 'express'
import categoryController from '../../controllers/category'

const router = express.Router({
  mergeParams: true
})

router
  .get('/', categoryController.getCategories)
  .get('/count', categoryController.countCategories)
  .get('/:id', categoryController.getCategoryById)
  .post('/',
    categoryController.checkUnique,
    categoryController.createCategory)
  .put('/:id',
    categoryController.checkUnique,
    categoryController.updateCategoryById)
  .delete('/:id', categoryController.deleteCategoryById)

export default router
