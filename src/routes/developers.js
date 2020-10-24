const controller = require('../controllers/developers')
const logger = require('../helpers/log')
const schemaDev = require('../schemas/developer')

const db = require('../DB/index')

const DEVS = (app) => {
  app.get('/developers', (req, res) => {
    const controllerDEV = new controller()
    console.log('cheguei')
    try {
      controllerDEV.GetAll()
        .then((results) => {
          res.status(200).send(results)
        })
        .catch((error) => {
          logger.error('Erro ao consultar os devs' + error)
          res.status(400).send(error)
        })

    } catch (error) {
      logger.error('Erro ao consultar os devs' + error)
      res.send(400).send(error)
    }
  })

  app.get('/developers/:name', (req, res) => {
    const controllerDEV = new controller()

    try {
      controllerDEV.GetByName(req.params.name)
        .then((results) => {
          res.status(200).send(results)
        })
        .catch((error) => {
          logger.error(`GET BY NAME ROUTES ${error}`)
          res.status(400).send(error)
        })
    } catch (error) {
      logger.error(`GET BY NAME ROUTES ${error}`)
      res.status(400).send(error)
    }
  })

  app.post('/developers', (req, res) => {
    
    
  })

  app.get('/delete',async (req, res) => {
    let sql = `DROP TABLE DEVELOPERS`
    db.all(sql, (err, rows) => {
      if (err) {
        logger.error(`DELETE ROUTES ${err}`)
        res.status(400).send(err)
      } else {
        res.sendStatus(200)
      }
    })
  })
}

module.exports = DEVS