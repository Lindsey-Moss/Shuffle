'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Card.belongsTo(models.Deck, { foreignKey: 'deckID' })
    }
  };
  Card.init({
    deckID: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'decks',
        key: 'deckID'
      }
    },
    cardName: DataTypes.STRING,
    frontImage: DataTypes.STRING,
    frontImageInv: DataTypes.STRING,
    cardArtist: DataTypes.STRING,
    cardDefinition: DataTypes.STRING,
    cardDetails: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Card',
    tableName: 'cards'
  });
  return Card;
};