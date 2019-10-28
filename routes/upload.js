import express from 'express'
import multer from 'multer'
import passport from 'passport'
import { join } from 'path'
import uploadController from '../controllers/upload'

const router = express.Router()

// const upload = multer({
//   dest: join(__dirname, '/../uploads')
// })

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, join(__dirname, '/../uploads'))
  },
  filename(req, file, cb) {
    // 文件名由上传时间戳+随机数生成避免重复
    const ext = file.originalname.split('.').pop()// 文件后缀扩展名
    const random = parseInt(Math.random() * 9999)
    const fileName = `${ Date.now() + random }.${ ext }`

    cb(null, fileName)
  }
})

const upload = multer({ storage })

router.post('/', passport.authenticate('jwt', { session: false }), upload.single('file'), uploadController.uploadFile)

export default router
