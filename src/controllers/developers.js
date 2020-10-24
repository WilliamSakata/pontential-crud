const MODEL = require('../models/developers')
const logger = require('../helpers/log')
const schemaDev = require('../schemas/developer')

class DevController {
  GetAll() {
    return new Promise((resolve, reject) => {
      const modelDEV = new MODEL()

      modelDEV.listAll()
        .then((results) => {
          resolve(results)
        })
        .catch((error) => {
          logger.error('GET ALL CONTROLLERS ' + error)
          reject(error)
        })
    })
  }

  GetByName(name) {
    return new Promise((resolve, reject) => {
      const modelDEV = new MODEL()

      modelDEV.listByName(name)
        .then((results) => {
          resolve(results)
        })
        .catch((error) => {
          logger.error('GET BY NAME CONTROLLERS ' + error)
          reject(error)
        })
    })
  }

  async Create(req) {
    const schema = new schemaDev()

    await schema.bindSchema(req)

    const modelDEV = new MODEL()

    modelDEV.create(schema)
  }
}

module.exports = DevController