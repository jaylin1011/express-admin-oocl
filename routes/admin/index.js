import passport from 'passport'
import articleRouter from './article'
import categoryRouter from './category'
import roleRouter from './role'
import authorityRouter from './authority'
import menuRouter from './menu'
import pictureRouter from './picture'
import userRouter from './user'
import crudRouter from './crud'
import formatModel from '../../middlewares/formatModel'

const adminRouter = (app) => {
  // CRUD
  app.use('/api/admin/crud/:model',
    passport.authenticate('jwt', { session: false }),
    formatModel, crudRouter)

  // 用户管理
  app.use('/api/admin/users', userRouter)

  // 分类管理
  app.use('/api/admin/categories',
    passport.authenticate('jwt', { session: false }),
    categoryRouter)

  // 菜单管理
  app.use('/api/admin/menus',
    passport.authenticate('jwt', { session: false }),
    menuRouter)

  // 权限管理
  app.use('/api/admin/authorities',
    passport.authenticate('jwt', { session: false }),
    authorityRouter)

  // 权限管理
  app.use('/api/admin/roles',
    passport.authenticate('jwt', { session: false }),
    roleRouter)

  // 文章管理
  app.use('/api/admin/articles',
    passport.authenticate('jwt', { session: false }),
    articleRouter)

  // 图片管理
  app.use('/api/admin/pictures',
    passport.authenticate('jwt', { session: false }),
    pictureRouter)
}

export default adminRouter
