const db = require('../DB/index')
const logger = require('../helpers/log')

class DevModel {
  create(sqlDev) {
    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO DEVELOPERS(NOME, SEXO, IDADE, DATA_NASCIMENTO, HOBBY) VALUES (?, ?, ?, ?, ?)`
      db.run(sql, sqlDev, (error, rows) => {
        if (error) {
          logger.error(`Ocorreu um erro ao inserir um novo dev ${error}`)
          reject(error)
        }
        else {
          resolve(`DEV criado com sucesso`)
        }
      })
    })
  }

  listAll() {
    return new Promise((resolve, reject) => {

      let sql = `SELECT * FROM DEVELOPERS`

      db.all(sql, (error, rows) => {
        if (error) {
          logger.error('Ocorreu um erro ao selecionar os devs')
          reject(error)
        } else {
          resolve(rows)
        }
      })
    })
  }

  listByName(nome) {
    return new Promise((resolve, reject) => {

      let sql = `SELECT * FROM DEVELOPERS WHERE NOME = '${nome}'`

      db.all(sql, (error, rows) => {
        if (error) {
          logger.error(error)

          reject(error.code == 'SQLITE_CONSTRAINT' ? `Nenhum DEV encontrado com esse nome` : error)
        } else {
          resolve(rows)
        }
      })
    })
  }

  listByAge(idade) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM DEVELOPERS WHERE IDADE = ${idade}`

      db.all(sql, (error, rows) => {
        if (error) {
          logger.error(error)
          reject(error)
        } else {
          resolve(rows)
        }
      })
    })
  }

  deleteByAge(idade) {
    return new Promise((resolve, reject) => {
      let sql = `DELETE FROM DEVELOPERS WHERE IDADE = ${idade}`

      db.run(sql, (error, rows) => {
        if (error) {
          logger.error(error)
          reject(error)
        } else {
          resolve(`Dev deletado com sucesso`)
        }
      })

    })
  }

  deleteByName(nome) {
    return new Promise((resolve, reject) => {
      let sql = `DELETE FROM DEVELOPERS WHERE NOME = '${nome}'`

      db.run(sql, (error, rows) => {
        if (error) {
          logger.error(error)
          reject(error)
        } else {
          resolve(`Dev deletado com sucesso`)
        }
      })
    })
  }

  exists(nome) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT COUNT(*) as COUNT FROM DEVELOPERS WHERE NOME = '${nome}'`

      db.all(sql, (error, rows) => {
        if (error) {
          logger.error(error)
          reject(error)
        } else {
          resolve(rows[0].COUNT)
        }
      })
    })
  }

  existsByAge(idade) {
    return new Promise((resolve, reject) => {
      let sql = `SELECT COUNT(*) as COUNT FROM DEVELOPERS WHERE IDADE = ${idade}`

      db.all(sql, (error, rows) => {
        if (error) {
          logger.error(error)
          reject(error)
        } else {
          resolve(rows[0].COUNT)
        }
      })
    })
  }

  update(sqlDev) {
    return new Promise((resolve, reject) => {
      let sql = `UPDATE DEVELOPERS set 
                  NOME = ?, 
                  SEXO = ?,
                  IDADE = ?,
                  DATA_NASCIMENTO = ?,
                  HOBBY = ? 
                  WHERE NOME = ?`
      db.run(sql, sqlDev, (error, result) => {
        if (error) {
          logger.error(error)
          reject(error)
        } else {
          resolve(`Dev atualizado com sucesso`)
        }
      })
    })
  }
}

module.exports = DevModel