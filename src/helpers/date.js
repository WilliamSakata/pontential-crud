const dayjs = require('dayjs')

const calculaIdade = (data) => {
  return new Promise((resolve, reject) => {
    try {
      let arrayData = data.split('/')
      let atual = dayjs()
      
      let dataNascimento = new dayjs(`${arrayData[2]}-${arrayData[1]}-${arrayData[0]}`)

      let idade = atual.diff(dataNascimento, "year")
      resolve(idade)
    } catch (error) {
      reject(error)
    }

  })
}

module.exports = calculaIdade