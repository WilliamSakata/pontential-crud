const CONTROLLER = require('../controllers/developers')
const controllerDEV = new CONTROLLER()
const logger = require('../helpers/log')
const schemaDEV = require('../schemas/developer')
const model = require('../models/developers')
const db = require('../DB/index')

const DEVS = (app) => {
  app.get('/developers', (req, res) => {
    try {
      controllerDEV.GetAll()
        .then((results) => {
          res.status(200).send(results)
        })
        .catch((error) => {
          logger.error('Erro ao consultar os devs' + error)
          res.status(404).send(error)
        })

    } catch (error) {
      logger.error('Erro ao consultar os devs' + error)
      res.send(404).send(error)
    }
  })

  app.get('/developers/nome/:name', (req, res) => {
    try {
      controllerDEV.GetByName(req.params.name)
        .then((results) => {
          res.status(200).send(results)
        })
        .catch((error) => {
          logger.error(`GET BY NAME ROUTES ${error}`)
          res.status(404).send(error)
        })
    } catch (error) {
      logger.error(`GET BY NAME ROUTES ${error}`)
      res.status(404).send(error)
    }
  })

  app.get('/developers/id/:id', (req, res) => {
    try {
      controllerDEV.GetByID(req.params.id)
        .then((result) => {
          res.status(200).send(result)
        })
        .catch((error) => {
          logger.error(`GET BY ID ROUTES ${error}`)
          res.status(404).send(error)
        })
    } catch (error) {
      res.status(404).send(error)
    }
  })

  app.get('/developers/idade/:idade', (req, res) => {
    try {
      controllerDEV.GetByAge(req.params.idade)
        .then((results) => {
          res.status(200).send(results)
        })
        .catch((error) => {
          logger.error(`GET BY AGE ROUTES ${error}`)
          res.status(404).send(`${error}`)
        })
    } catch (error) {
      logger.error(`GET BY AGE ROUTES ${error}`)
      res.status(404).send(`${error}`)
    }
  })

  app.post('/developers', (req, res) => {
    try {
      controllerDEV.Create(req.body)
        .then((result) => {
          res.status(200).send(`Usuário criado com sucesso`)
        })
        .catch((error) => {
          logger.error(`CREATE USER ${error}`)
          res.status(404).send(error)
        })
    } catch (error) {
      logger.error(`CREATE USER ${error}`)
      res.status(404).send(error)
    }
  })

  app.put('/developers/:id', async (req, res) => {
    try {
      controllerDEV.Update(req.params.id, req.body)
        .then((result) => {
          res.status(200).send(`DEV atualizado com sucesso`)
        })
        .catch((error) => {
          logger.error(`UPDATE DEV ${error}`)
          res.status(404).send(error.message)
        })
    } catch (error) {
      logger.error(`UPDATE USER ${error}`)
      res.status(404).send(error.message)
    }
  })

  app.delete('/developers/nome/:nome', async (req, res) => {
    try {
      controllerDEV.DeleteByName(req.params.nome)
        .then((result) => {
          res.status(200).send(result)
        })
        .catch((error) => {
          logger.error(`DELETE DEV ${error}`)
          res.status(404).send(error.message)
        })
    } catch (error) {
      logger.error(`DELETE DEV ${error}`)
      res.status(404).send(error.message)
    }
  })

  app.delete('/developers/idade/:idade', async (req, res) => {
    try {
      controllerDEV.DeleteByAge(req.params.idade)
        .then((result) => {
          res.status(200).send(result)
        })
        .catch((error) => {
          logger.error(`DELETE DEV ${error}`)
          res.status(404).send(error.message)
        })
    } catch (error) {
      logger.error(`DELETE DEV ${error}`)
      res.status(404).send(error.message)
    }
  })

  app.delete('/developers/id/:id', async (req, res) => {
    try {
      controllerDEV.DeleteByID(req.params.id)
        .then((result) => {
          res.status(200).send(result)
        })
        .catch((error) => {
          logger.error(`DELETE DEV ${error}`)
          res.status(404).send(error)
        })
    } catch (error) {
      logger.error(`DELETE DEV ${error}`)
      res.status(404).send(error)
    }
  })
}

module.exports = DEVS