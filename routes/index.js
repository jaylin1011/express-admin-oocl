import adminRouter from './admin/index'
import uploadRouter from './upload'

const router = (app) => {
  adminRouter(app)
  app.use('/uploads', uploadRouter)
}

export default router
