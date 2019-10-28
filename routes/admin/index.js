import userRouter from './user'
// import crudRouter from './crud'

const adminRouter = (app) => {
  app.use('/admin/users', userRouter)
  // app.use('/admin/crud/:model', crudRouter)
}

export default adminRouter
