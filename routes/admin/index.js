import passport from 'passport'
import articleRouter from './article'
import categoryRouter from './category'
import pictureRouter from './picture'
import userRouter from './user'

const adminRouter = (app) => {
  // 用户管理
  app.use('/admin/users', userRouter)

  // 分类管理
  app.use('/admin/categories',
    // passport.authenticate('jwt', { session: false }),
    categoryRouter)

  // 文章管理
  app.use('/admin/articles',
    passport.authenticate('jwt', { session: false }),
    articleRouter)

  // 图片管理
  app.use('/admin/pictures',
    passport.authenticate('jwt', { session: false }),
    pictureRouter)
}

export default adminRouter
