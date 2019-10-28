import { join } from 'path'

const PUBLIC_PATH = join(__dirname, '/../public')
const VIEW_PATH = join(__dirname, '/../views')
const UPLOAD_PATH = join(__dirname, '/../uploads')
const BASE_URL = 'http://localhost:3000'
const UPLOAD_URL = 'http://localhost:3000/uploads'

export {
  PUBLIC_PATH,
  UPLOAD_PATH,
  VIEW_PATH,
  BASE_URL,
  UPLOAD_URL
}
