import express from 'express'
import pictureController from '../../controllers/picture'

const router = express.Router({
  mergeParams: true
})

router
  .get('/', pictureController.getPictures)
  .get('/count', pictureController.countPictures)
  .get('/:id',
    pictureController.getPictureById)
  .post('/',
    pictureController.createPicture)
  .put('/:id',
    pictureController.updatePictureById)
  .delete('/:id', pictureController.deletePictureById)

export default router
