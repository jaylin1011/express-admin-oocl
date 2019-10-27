export default {
  // uri: 'mongodb://localhost/express_admin',
  uri: 'mongodb://localhost/express_test',
  options: {
    useNewUrlParser: true,
    useCreateIndex: true, // 使schema设计的时候unique生效
    useUnifiedTopology: true,
    // useFindAndModify: false,
  },
}
