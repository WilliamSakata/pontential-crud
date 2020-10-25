const MODEL = require('../models/developers')
const modelDEV = new MODEL()
const logger = require('../helpers/log')
const schemaDEV = require('../schemas/developer')
const calculaIdade = require('../helpers/date')

class DevController {
  GetAll() {
    try {
      return new Promise((resolve, reject) => {
        modelDEV.listAll()
          .then((results) => {
            resolve(results)
          })
          .catch((error) => {
            logger.error('GET ALL CONTROLLERS ' + error)
            reject(error)
          })
      })
    } catch (error) {
      logger.error(error)
      reject(error)
    }
  }

  GetByID(id) {
    try {
      return new Promise((resolve, reject) => {
        modelDEV.listByID(id)
          .then((results) => {
            if (results.length == 0)
              throw new Error(`Nenhum dev encontrado com esse id`)
            resolve(results)
          })
          .catch((error) => {
            logger.error(`GET BY ID CONTROLLERS ${error}`)
            reject(error)
          })
      })
    } catch (error) {
      logger.error(error)
      reject(error)
    }
  }

  GetByName(name) {
    try {
      return new Promise((resolve, reject) => {
        modelDEV.listByName(name)
          .then((results) => {
            if (results.length == 0)
              throw new Error(`Nenhum dev encontrado com esse nome`)

            resolve(results)
          })
          .catch((error) => {
            logger.error('GET BY NAME CONTROLLERS ' + error)
            reject(error)
          })
      })
    } catch (error) {
      logger.error(error)
      reject(error)
    }
  }

  GetByAge(age) {
    try {
      return new Promise((resolve, reject) => {
        modelDEV.listByAge(age)
          .then((results) => {
            if (results.length == 0)
              throw new Error(`Nenhum DEV encontrado com essa idade`)
            else {
              resolve(results)
            }
          })
          .catch((error) => {
            logger.error(`GET BY AGE CONTROLLERS ${error}`)
            reject(error)
          })
      })
    } catch (error) {
      logger.error(error)
      reject(error)
    }
  }

  Create(body) {
    return new Promise(async (resolve, reject) => {
      try {
        const schema = new schemaDEV()

        if (body.idade <= 0 || !body.idade)
          body.idade = await calculaIdade(body.dataNascimento)

        await schema.bindSchema(body)

        let devCadastrado = await modelDEV.exists(schema.nome)

        if (devCadastrado)
          throw new Error(`Dev já cadastrado, não é possível cadastrar novamente`)

        let sql = await schema.buildSqlCreate()

        let response = await modelDEV.create(sql)
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }

  DeleteByAge(idade) {
    return new Promise(async (resolve, reject) => {
      try {
        let devCadastrado = await modelDEV.existsByAge(idade)

        if (!devCadastrado)
          throw new Error(`Dev não cadastrado, não é possível deletar`)

        modelDEV.deleteByAge(idade)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      } catch (error) {
        reject(error)
      }
    })
  }

  DeleteByName(name) {
    return new Promise(async (resolve, reject) => {
      try {
        let devCadastrado = await modelDEV.exists(name)

        if (!devCadastrado)
          throw new Error(`Dev não cadastrado, não é possível deletar`)

        modelDEV.deleteByName(name)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      } catch (error) {
        reject(error)
      }
    })
  }

  DeleteByID(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let devCadastrado = await modelDEV.existsByID(id)

        if (!devCadastrado)
          throw new Error(`Dev não cadastrado, não é possível deletar`)

        modelDEV.deleteByID(id)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      } catch (error) {
        reject(error)
      }
    })
  }

  Update(id, body) {
    return new Promise(async (resolve, reject) => {
      try {
        const schema = new schemaDEV()

        if (body.idade <= 0 || !body.idade)
          body.idade = await calculaIdade(body.dataNascimento)

        await schema.bindSchema(body)

        let devNaoCadastrado = await modelDEV.existsByID(id)

        if (devNaoCadastrado != 1)
          throw new Error(`Esse dev não está cadastrado, não é possível atualizar`)

        let sql = await schema.buildSqlUpdate(id)

        let response = await modelDEV.update(sql)

        resolve(response)
      } catch (error) {
        logger.error(`ERRO AO ATUALIZAR ${error}`)
        reject(error)
      }
    })
  }
}

module.exports = DevController