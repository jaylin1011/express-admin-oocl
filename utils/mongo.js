import chalk from 'chalk'
import mongoose from 'mongoose'
import { join } from 'path'
import requireAll from 'require-all'
import dbConfig from '../config/db'


const { uri, options } = dbConfig

const onceOpen = () => {
  console.log(
    chalk.green.bold('db connected...=。=')
  )
}

const onError = (error) => {
  console.error(
    chalk.red.bold(`Error in MongoDb connection: ${error}`)
  )
  mongoose.disconnect()
}

const onClose = () => {
  console.log(
    chalk.red.bold('db reconnected...=。=')
  )
  mongoose.connect(uri, options)
}

requireAll(join(__dirname, '/../models'))
mongoose.connect(uri, options)
// mongo db connect
// const connectDb = () => {
//   mongoose.connect(uri, options)
// }
// mongoose.Promise = global.Promise
mongoose.connection.once('open', onceOpen)
// mongoose.connection.once('connected', onceOpen)

mongoose.connection.on('error', onError)

mongoose.connection.on('close', onClose)
// mongoose.connection.on('disconnected', onClose)

export default mongoose
