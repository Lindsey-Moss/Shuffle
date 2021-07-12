'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    entryIcon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entry',
    tableName: 'entries'
  });
  return Entry;
};