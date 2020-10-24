const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = 'db.sqlite'

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message)
    throw err
  } else {
    console.log('Conectado com sucesso')
    db.run(`CREATE TABLE DEVELOPERS (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      NOME TEXT NOT NULL UNIQUE,
      SEXO TEXT,
      IDADE INTEGER, 
      DATA_NASCIMENTO DATE,
      HOBBY TEXT
    )`, (err) => {
      if(err) {
        console.log(`A tabela já existe`)
      }
      else{
        var insert = `INSERT INTO DEVELOPERS(NOME, SEXO, IDADE, DATA_NASCIMENTO, HOBBY) VALUES (?, ?, ?, ?, ?)`
        db.run(insert, ['william sakata', 'M', 23, '16-10-1997', 'Progamar e jogar'])
        db.run(insert, ['hugo fuzinato', 'M', 22, '23-02-1998', 'programar e ser doente'])
        db.run(insert, ['carol costa', 'F', 23, '04-06-1997', 'Tocar violino estudar'])
      }
    })
  }
})

module.exports = db