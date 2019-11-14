import mongoose from 'mongoose'
import {
  getAll,
  getOnelById,
  updateOneById,
  deleteOneById,
  createOne,
  validUnique,
  getCount
} from './common'

const Authority = mongoose.model('Authority')

// 权限数量
const countAuthorities = getCount(Authority)

const options = {
  queryOptions: {
    populate: {
      path: 'children',
      populate: {
        path: 'children'
      }
    }
  }
}

// 权限列表
const getAuthorities = getAll(Authority, options)


// 权限详情
const getAuthorityById = getOnelById(Authority, options)

// 添加权限
const createAuthority = createOne(Authority)

// 删除权限
const deleteAuthorityById = deleteOneById(Authority)

// 修改权限
const updateAuthorityById = updateOneById(Authority)

// 校验权限是否重复
const checkUnique = validUnique(Authority)

export default {
  getAuthorities,
  getAuthorityById,
  updateAuthorityById,
  deleteAuthorityById,
  createAuthority,
  checkUnique,
  countAuthorities
}
