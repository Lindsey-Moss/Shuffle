const Router = require('express').Router()

const AuthRouter = require('./AuthRouter')
// const UserRouter = require('./UserRouter')
// const TarotRouter = require('./TarotRouter')
// const JournalRouter = require('./JournalRouter')

Router.use('/auth', AuthRouter)
// Router.use('/users', UserRouter)
// Router.use('/tarot', TarotRouter)
// Router.use('/journal', JournalRouter)

module.exports = Router