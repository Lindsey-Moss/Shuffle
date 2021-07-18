'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
 
    static associate(models) {
      // define association here
      Entry.belongsTo(models.User, {foreignKey: 'userID'})
    }
  };
  Entry.init(
    {
    userID: {
      type: DataTypes.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'userID'
      }
    },
    read: DataTypes.ARRAY(DataTypes.TEXT),
    entryTitle: DataTypes.STRING,
    entryBody: DataTypes.TEXT,
    entryIcon: DataTypes.STRING,
    inJournal: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Entry',
    tableName: 'entries'
  });
  return Entry;
};
