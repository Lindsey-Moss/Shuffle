const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { email, userName, preferredName, password, zipCode, zodiac } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ email, userName, preferredName, password: passwordDigest, zipCode, zodiac })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { userName: req.body.userName },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(req.body.password, user.password))
    ) {
      let payload = {
        id: user.id,
        userName: user.userName
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized Access Attempt' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  Register,
  Login
}