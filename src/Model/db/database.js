const { Sequelize } = require('@sequelize/core')
const { SqliteDialect } = require('@sequelize/sqlite3')


const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: 'sequelize.sqlite',
})

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true })
    console.log('Database synchronized!')
  } catch (error) {
    console.error('Unable to synchronize the database:', error)
  }
}

module.exports = sequelize
