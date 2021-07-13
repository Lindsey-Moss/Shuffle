'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Deck.hasMany(models.Card, { foreignKey: 'deckID' })
    }
  };
  Deck.init({
    deckID: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      validate: {
        notNull: true
      }
    },
    deckName: DataTypes.STRING,
    backImage: DataTypes.STRING,
    backImgInv: DataTypes.STRING,
    deckArtist: DataTypes.STRING,
    deckDetails: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Deck',
    tableName: 'decks'
  });
  return Deck;
};