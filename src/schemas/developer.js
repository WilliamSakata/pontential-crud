class developer {
  constructor() {
    this.nome =  ''
    this.sexo = ''
    this.hobby = ''
    this.idade = 0
    this.dataNascimento = ''
  }

  bindSchema(req){
    this.nome = req.nome
    this.idade = req.idade
    this.dataNascimento = req.dataNascimento
    this.hobby = req.hobby
  }
}

module.exports = developer