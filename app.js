import chalk from 'chalk'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import createError from 'http-errors'
import express from 'express'
import logger from 'morgan'
import { PUBLIC_PATH, UPLOAD_PATH, VIEW_PATH } from './config/constants'
import indexRouter from './routes/index'
import connectDb from './utils/db'

const app = express()
connectDb()

// view engine setup
app.set('views', VIEW_PATH)
app.set('view engine', 'ejs')

// cors setup
app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))
app.use('/public', express.static(PUBLIC_PATH))
app.use('/upload', express.static(UPLOAD_PATH))

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
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

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
