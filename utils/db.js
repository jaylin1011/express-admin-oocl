import chalk from 'chalk'
import mongoose from 'mongoose'

import dbConfig from '../config/db'

const { uri, options } = dbConfig

const onceOpen = () => {
  console.log(
    chalk.green.bold('db connected...=。=')
  )
}

const onError = (error) => {
  console.error(
    chalk.red.bold(`Error in MongoDb connection: ${ error }`)
  )
  mongoose.disconnect()
}

const onClose = () => {
  console.log(
    chalk.red.bold('db reconnected...=。=')
  )
  mongoose.connect(uri, options)
}

// mongo db connect
const connectDb = () => {
  mongoose.connect(uri, options)
}
// mongoose.Promise = global.Promise

const db = mongoose.connection

db.once('open', onceOpen)

db.on('error', onError)

db.on('close', onClose)

export default { connectDb }
