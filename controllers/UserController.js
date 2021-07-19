const { User } = require('../models')

const GetAllUsers = async (req, res) => {
  try {
    let userlist = await User.findAll()
    res.send(userlist)
  } catch (error) {
    throw error
  }
}

const GetUserByID = async (req, res) => {
  try {
    let userID = req.params.userID
    let userFound = await User.findByPk(userID)
    res.send(userFound)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userID = req.params.userID
    let updatedUser = await User.update(req.body, {
      where: { userID: userID },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let userID = req.params.userID
    await User.destroy({ where: { userID: userID } })
    res.send({ message: `If you must go, go in peace and joy.` })
  } catch (error) {
    throw error
  }
}



  module.exports = {
    GetAllUsers,
    GetUserByID,
    // GetUserByEmail,
    UpdateUser,
    DeleteUser
  }