import chalk from 'chalk'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import createError from 'http-errors'
import express from 'express'
import logger from 'morgan'
import passport from 'passport'
import {
  PUBLIC_PATH,
  UPLOAD_PATH,
  VIEW_PATH
} from './config/constants'
import './utils/mongo'
import router from './routes/index'
import passportJwt from './utils/passport'

const app = express()

// view engine setup
app.set('views', VIEW_PATH)
app.set('view engine', 'ejs')

// cors setup
app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// initialize passport
app.use(passport.initialize())
passportJwt(passport)


// app.use(express.static(path.join(__dirname, 'public')))
app.use('/public', express.static(PUBLIC_PATH))
app.use('/uploads', express.static(UPLOAD_PATH))// 图片上传静态资源托管

router(app)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log(
    chalk.red.bold('createError...QAQ')
  )
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  console.log(
    chalk.red.bold('Error handler...QAQ')
  )
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // error response
  // res
  //   .status(err.status || 500)
  //   .json({
  //     err_code: err.err_code,
  //     message: err.message
  //   })
  if (!err.status) {
    return res
      .status(500)
      .json({
        err_code: err.err_code,
        message: err.message
      })
  }
  res
    .status(err.status)
    .json({
      err_code: err.err_code,
      message: err.message
    })
})

export default app
