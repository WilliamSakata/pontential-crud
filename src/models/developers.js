const db = require('../DB/index')
const logger = require('../helpers/log')

class DevModel {
  create(dev) {
    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO DEVELOPERS(NOME, IDADE, DATA_NASCIMENTO, HOBBY) VALUES ('${dev.nome}', ${dev.idade}, '${dev.dataNascimento}', ${dev.hobby})`
      //fazer um bagulho no schema de dev para retornar os campos dele em formato de array pra fazer a inserção automática
      db.run(sql, (error, rows) => {
        if (error) {
          logger.error(`Ocorreu um erro ao inserir um novo dev`)
          reject(error)
        }
        else {
          resolve(this.lastID)
        }
      })
    })
  }

  listAll() {
    return new Promise((resolve, reject) => {

      let sql = `SELECT * FROM DEVELOPERS`

      db.all(sql, (err, rows) => {
        if (err) {
          logger.error('Ocorreu um erro ao selecionar os devs')
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }

  listByName(name) {
    return new Promise((resolve, reject) => {

      let sql = `SELECT * FROM DEVELOPERS WHERE NOME LIKE '%${name}%'`

      db.all(sql, (err, rows) => {
        if (err) {
          logger.error(err)
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }
}

module.exports = DevModel