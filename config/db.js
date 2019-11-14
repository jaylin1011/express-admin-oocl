export default {
  // uri: 'mongodb://localhost/test_admin',
  uri: 'mongodb://localhost/admin_oocl',
  options: {
    useNewUrlParser: true,
    useCreateIndex: true, // 使schema设计的时候unique生效
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
}
