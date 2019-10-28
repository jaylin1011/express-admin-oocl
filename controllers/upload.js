import { UPLOAD_URL } from '../config/constants'

const uploadFile = (req, res, next) => {
  const { file } = req
  const { size, mimetype, filename } = file
  const types = ['jpg', 'jpeg', 'png', 'gif']// 允许上传类型
  const fileType = mimetype.split('/').pop()// 上传类型

  // 验证文件大小
  if (size > 500000) {
    return res
      .status(400)
      .json({
        message: '文件大小不超过500kB!QAQ'
      })
  }
  // 验证图片格式
  if (types.indexOf(fileType) === -1) {
    return res
      .status(400)
      .json({
        message: '图片格式不正确!QAQ'
      })
  }

  file.url = `${ UPLOAD_URL }/${ filename }`
  res.send(file)
}

export default { uploadFile }
