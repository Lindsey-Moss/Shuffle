const { Op } = require('sequelize')
const { Entry } = require('../models')

const GetAllEntriesEver = async (req, res) => {
  try {
    let journal = await Entry.findAll()
    res.send(journal)
  } catch (error) {
    throw error
  }
}

const GetAllEntriesForUser = async (req, res) => {
  try {
    let userID = req.params.userID
    let journal = await Entry.findAll({
      where: { 
        userID: userID, 
        inJournal:"1"
      }
    })
    res.send(journal)
  } catch (error) {
    throw error
  }
}

const GetEntriesByIcon = async (req, res) => {
  try {
    let userID = req.params.userID
    let icon = req.params.icon
    let matchingEntries = await Entry.findAll({
      where: { 
        userID: userID, 
        inJournal: "1",
        entryIcon: icon
       },
      returning: true
    })
    res.send(matchingEntries)
  } catch (error) {
    throw error
  }
}

const GetEntriesByFilter = async (req, res) => {
  try {
    let userID = req.params.userID
    let string = req.params.string
    let filter = `%${string}%`
    let matchingEntries = await Entry.findAll({
      where: { 
        userID: userID, 
        inJournal: "1",
        [Op.or]: [
          { entryTitle: { [Op.iLike]: filter } },
          { entryBody: { [Op.iLike]: filter } }
        ] 
      }
    })
    res.send(matchingEntries)
  } catch (error) {
    throw error
  }
}
  

const AddEntry = async (req, res) => {
  try {
    let userID = req.params.userID
    const save = await Entry.create(req.body, {
      where: {
        userID: userID
      }
    })
    res.send(save)
  } catch (error) {
    throw error
  }
}

const UpdateEntry = async (req, res) => {
  try {
    let userID = req.params.userID
    let entryID = parseInt(req.params.entryID)
    let updatedEntry = await Entry.update(req.body, {
      where: { 
        userID: userID, 
        inJournal: "1",
        id: entryID },
      returning: true
    })
    res.send(updatedEntry)
  } catch (error) {
    throw error
  }
}

const DeleteEntry = async (req, res) => {
  try {
    let userID = req.params.userID
    let entryID = parseInt(req.params.entryID)
    await Entry.destroy({
      where: { 
        userID: userID, 
        id: entryID 
      },
      returning: true
    })
    res.send({ message: `"The inability to forget is far more devastating than the inability to remember." — Mark Twain` })
  } catch (error) {
    throw error
  }
}



  module.exports = {
    GetAllEntriesEver,
    GetAllEntriesForUser,
    GetEntriesByIcon,
    GetEntriesByFilter,
    AddEntry,
    UpdateEntry,
    DeleteEntry
  }