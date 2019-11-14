import express from 'express'
import authorityController from '../../controllers/authority'

const router = express.Router({
  mergeParams: true
})

router
  .get('/', authorityController.getAuthorities)
  .get('/count', authorityController.countAuthorities)
  .get('/:id', authorityController.getAuthorityById)
  .post('/',
    authorityController.checkUnique,
    authorityController.createAuthority)
  .put('/:id',
    // authorityController.checkUnique,
    authorityController.updateAuthorityById)
  .delete('/:id', authorityController.deleteAuthorityById)

export default router
