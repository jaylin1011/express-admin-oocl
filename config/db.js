export default {
  // uri: 'mongodb://localhost/express_test',
  uri: 'mongodb://localhost/admin_oocl',
  options: {
    useNewUrlParser: true,
    useCreateIndex: true, // 使schema设计的时候unique生效
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
}
