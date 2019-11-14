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

const Menu = mongoose.model('Menu')

// 菜单数量
const countMenus = getCount(Menu)

// 菜单列表
const getMenus = getAll(Menu, {
  queryOptions: { populate: 'menus' }
})

// 菜单详情
const getMenuById = getOnelById(Menu, {
  populate: 'menus'
})

// 添加菜单
const createMenu = createOne(Menu)

// 删除菜单
const deleteMenuById = deleteOneById(Menu)

// 修改菜单
const updateMenuById = updateOneById(Menu)

// 校验菜单是否重复
const checkUnique = validUnique(Menu)

export default {
  getMenus,
  getMenuById,
  updateMenuById,
  deleteMenuById,
  createMenu,
  checkUnique,
  countMenus
}
