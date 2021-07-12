'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Entry, { foreignKey: 'userID' })
    }
  };
  User.init({
    userID: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      validate: {
        notNull: true
      }
    },
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    pwDigest: DataTypes.STRING,
    preferredName: DataTypes.STRING,
    zipCode: DataTypes.INTEGER(5),
    zodiac: DataTypes.ENUM('Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn',"Don't know/Don't care"),
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};