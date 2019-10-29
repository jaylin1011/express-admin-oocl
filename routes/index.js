import passport from 'passport'
import adminRouter from './admin/index'
import uploadRouter from './upload'
// import webRouter from './web/index'

const router = (app) => {
  adminRouter(app)
  // webRouter(app)

  app.use('/uploads', passport.authenticate('jwt', { session: false }), uploadRouter)
}

export default router
