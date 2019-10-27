import { Strategy, ExtractJwt } from 'passport-jwt'
import jwtConfig from '../config/jwt'
import User from '../models/user'

const { secret } = jwtConfig
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = secret

const passportJwt = (passport) => {
  passport.use(new Strategy(opts, async (objPayload, done) => {
    try {
      const user = await User.findById(objPayload.id)
      if (!user) {
        return done(null, false)
      }
      return done(null, user)
    } catch (error) {
      return done(error, false)
    }
  }))
}

export default passportJwt
