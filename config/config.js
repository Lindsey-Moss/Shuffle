require('dotenv').config()
module.exports = {
  development: {
    database: 'shuffle_development',
    dialect: 'postgres'
  },
  test: {
    database: 'shuffle_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
