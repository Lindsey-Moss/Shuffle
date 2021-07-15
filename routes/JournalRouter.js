const Router = require('express').Router()
const controller = require('../controllers/JournalController')

Router.get('/all', controller.GetAllEntriesEver)
Router.get('/:userID/all', controller.GetAllEntriesForUser)
Router.get('/:userID/by/:icon', controller.GetEntriesByIcon)
Router.get('/:userID/filter/:string', controller.GetEntriesByFilter)

Router.post('/:userID', controller.AddEntry)

Router.put('/:userID/:entryID', controller.UpdateEntry)

Router.delete('/:userID/:entryID', controller.DeleteEntry)


module.exports = Router
