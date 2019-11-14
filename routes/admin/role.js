import express from 'express'
import roleController from '../../controllers/role'

const router = express.Router({
  mergeParams: true
})

router
  .get('/', roleController.getRoles)
  .get('/count', roleController.countRoles)
  .get('/:id', roleController.getRoleById)
  .post('/',
    roleController.checkUnique,
    roleController.createRole)
  .put('/:id',
    // roleController.checkUnique,
    roleController.updateRoleById)
  .delete('/:id', roleController.deleteRoleById)

export default router
