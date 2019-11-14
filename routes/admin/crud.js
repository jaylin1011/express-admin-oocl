import express from 'express'
import * as crudController from '../../controllers/crud'

const router = express.Router({
  mergeParams: true
})

router
  .get('/', crudController.getAll())
  .get('/count', crudController.getCount())
  .get('/:id', crudController.getOnelById())
  .post('/',
    crudController.validUnique(),
    crudController.createOne())
  .put('/:id',
    // crudController.validUnique(),
    crudController.updateOneById())
  .delete('/:id', crudController.deleteOneById())

export default router
