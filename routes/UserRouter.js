const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetAllUsers)
Router.get('/id/:userID', controller.GetUserByID)
// Router.get('/email/:email', controller.GetUserByEmail)
Router.put('/:userID', controller.UpdateUser)
Router.delete('/:userID', controller.DeleteUser)

module.exports = Router
