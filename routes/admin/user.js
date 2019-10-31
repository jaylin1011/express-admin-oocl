import express from 'express'
import passport from 'passport'
import userController from '../../controllers/user'

const router = express.Router({
  mergeParams: true
})

router
  .get('/',
    passport.authenticate('jwt', { session: false }),
    userController.getUsers)
  .get('/count',
    passport.authenticate('jwt', { session: false }),
    userController.countUsers)
  .get('/:id',
    passport.authenticate('jwt', { session: false }),
    userController.getUserById)
  .post('/signup', userController.userSignup)
  .post('/signin', userController.userSignin)
  .put('/:id',
    passport.authenticate('jwt', { session: false }),
    userController.updateUserById)
  .delete('/:id',
    passport.authenticate('jwt', { session: false }),
    userController.deleteUserById)

export default router
