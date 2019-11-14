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

const Role = mongoose.model('Role')

// 角色数量
const countRoles = getCount(Role)

const options = {
  queryOptions: {
    populate: {
      path: 'authorities'
    }
  }
}
// 角色列表
const getRoles = getAll(Role, options)

// 角色详情
const getRoleById = getOnelById(Role, options)

// const getRoleById = async (req, res, next) => {
//   try {
//     const doc = await Role.findById(req.params.id).populate({
//       path: 'authorities',
//       populate: {
//         path: 'authorities',
//         populate: {
//           path: 'authorities'
//         }
//       }
//     })
//     res.json({
//       code: 0,
//       data: doc
//     })
//   } catch (error) {
//     next(error)
//   }
// }


// 添加角色
const createRole = createOne(Role)

// 删除角色
const deleteRoleById = deleteOneById(Role)

// 修改角色
const updateRoleById = updateOneById(Role)

// 校验角色是否重复
const checkUnique = validUnique(Role)

export default {
  getRoles,
  getRoleById,
  updateRoleById,
  deleteRoleById,
  createRole,
  checkUnique,
  countRoles
}
