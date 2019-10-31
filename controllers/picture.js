import {
  getAll,
  getOnelById,
  updateOneById,
  deleteOneById,
  createOne,
  getCount
} from './common'
import Picture from '../models/picture'

// 图片数量
const countPictures = getCount(Picture)

// 图片列表
const getPictures = getAll(Picture, {
  queryOptions: { populate: 'categories' }
})

// 图片详情
const getPictureById = getOnelById(Picture, {
  populate: 'categories'
})

// 添加图片
const createPicture = createOne(Picture)

// 删除图片
const deletePictureById = deleteOneById(Picture)

// 修改图片
const updatePictureById = updateOneById(Picture)

export default {
  getPictures,
  getPictureById,
  updatePictureById,
  deletePictureById,
  createPicture,
  countPictures
}
