const passport = require('passport')

const LocalStrategy =  require('passport-local').Strategy
const User = require('./db').User

passport.use(new LocalStrategy(
  function  (username, password, done) {

    User.findOne({
      where: { username: username }
    }).then((user) => {

      if (!user) {
        return done(null, false)
      }

      if (user.password != password) {
         return done(null, false)
      }

      done(null, user)

    }).catch(done)

  }
))

passport.serializeUser(
  function (user, done) {
    done(null, user.id)
  }
)

passport.deserializeUser(
  function (userId, done) {
    User.findByPk(userId)
      .then((user) => {
        done(null, user)
      })
      .catch(done)
  }
)
module.exports=passport