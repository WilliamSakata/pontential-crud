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
    this.sexo = req.sexo
    this.dataNascimento = req.dataNascimento
    this.hobby = req.hobby
  }

  buildSqlCreate(){
    let sqltemplate = [this.nome, this.sexo, this.idade, this.dataNascimento, this.hobby]
    return sqltemplate
  }

  buildSqlUpdate(){
    let sqltemplate = this.buildSqlCreate()
    sqltemplate.push(this.nome)

    return sqltemplate
  }
}

module.exports = developer