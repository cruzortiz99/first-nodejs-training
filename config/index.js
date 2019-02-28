var { database } = require('../properties.json')

function dburl() {
  return `mongodb://${database.user}:${database.password}@${database.uri}`
}

module.exports = {
  dburl
}