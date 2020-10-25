const request = require('supertest')
const app = require('../index')
let testID

describe('Running tests', () => {

  it(`should return a list with all devs`, async () => {
    const response = await request(app)
      .get('/developers')
      .send()

    expect(response.status).toBe(200)
  })

  it(`should return a list of devs filtered by name`, async () => {
    const response = await request(app)
      .get('/developers/nome/william')
      .send()

    expect(response.status).toBe(200)
  })

  it(`should return a list of devs filtered by age`, async () => {
    const response = await request(app)
      .get('/developers/idade/28')
      .send()

    expect(response.status).toBe(200)
  })

  it(`should return all the infos about a single dev`, async () => {
    const response = await request(app)
      .get('/developers/id/1')
      .send()

    expect(response.status).toBe(200)
  })

  it('should create a new dev and return success', async () => {
    const body = { 
      nome: 'Dev Teste', 
      sexo: 'M',
      dataNascimento: '01/01/2001',
      hobby: 'Testar',
      idade: 19
    }

    const response = await request(app)
      .post('/developers')
      .send(body)

    const devID = await request(app)
      .get('/developers/nome/teste')
      .send()

    testID = devID.body[0].ID

    expect(response.status).toBe(200)
  })

  it('should update a dev and return success', async () => {
    const body = {
      nome: 'DEV TESTE',
      sexo: 'M',
      dataNascimento: '01/01/1995',
      hobby: 'Codar'
    }

    const response = await request(app)
      .put(`/developers/${testID}`)
      .send(body)

    expect(response.status).toBe(200)
  })

  it('should delete the dev test and return success', async () => {
    const response = await request(app)
      .delete(`/developers/id/${testID}`)
      .send()

    expect(response.status).toBe(200)
  })
})