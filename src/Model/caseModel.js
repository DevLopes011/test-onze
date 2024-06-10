const DataTypes = require('@sequelize/core')
const sequelize = require('../Model/db/database.js')


const dbCases = sequelize.define('DbCases', {
  datePublicationNews: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  describeCaseFewWords: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contextAdditionalInformation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  partySource: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  caseImportance: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  caseLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = dbCases
