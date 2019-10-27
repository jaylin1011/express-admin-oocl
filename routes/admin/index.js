import userRouter from './user'

const adminRouter = (app) => {
  app.use('/admin/users', userRouter)
}

export default adminRouter
