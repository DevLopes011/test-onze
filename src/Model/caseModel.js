const DataTypes = require('@sequelize/core')
const { Sequelize } = require('@sequelize/core')
const { SqliteDialect } = require('@sequelize/sqlite3')

let sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: 'sequelize.sqlite',
})

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

async function synchronizeModel() {
  try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.')

      await sequelize.sync()
      console.log('Model synchronized successfully')
  } catch (error) {
      console.error('Unable to connect to the database:', error)
  }
}
synchronizeModel()

module.exports = dbCases
