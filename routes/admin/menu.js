import express from 'express'
import menuController from '../../controllers/menu'

const router = express.Router({
  mergeParams: true
})

router
  .get('/', menuController.getMenus)
  .get('/count', menuController.countMenus)
  .get('/:id', menuController.getMenuById)
  .post('/',
    menuController.checkUnique,
    menuController.createMenu)
  .put('/:id',
    // menuController.checkUnique,
    menuController.updateMenuById)
  .delete('/:id', menuController.deleteMenuById)

export default router
