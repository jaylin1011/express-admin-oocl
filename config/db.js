export default {
  uri: 'mongodb://localhost/express_admin',
  options: {
    useNewUrlParser: true,
    useCreateIndex: true, // 使schema设计的时候unique生效
    useUnifiedTopology: true,
  },
}
