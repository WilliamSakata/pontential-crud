const dateHelper = require('../helpers/date')

describe('Running helpers tests', () => {

  it(`should return the age of a person based on a date`, async () => {
    const dataNascimento = '16/10/1997'

    const idade = await dateHelper(dataNascimento)

    expect(idade).toBe(23)
  })
})