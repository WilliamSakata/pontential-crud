const sqlite = require('sqlite3')
const express = require('express')

const app = express()

const HTTP_PORT = 8000

app.listen(HTTP_PORT, () => {
  console.log(`Server is listening on port ${HTTP_PORT}`)
})

const db = new sqlite.Database('./db/user_database.db', (err) => {
  if(err)
    console.log(`Error while oppening database ${err.message}`)
  else{
    db.run('CREATE TABLE developers(\
      ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
      nome TEXT NOT NULL, \
      sobreNome TEXT NOT NULL, \
      sexo TEXT NOT NULL, \
      hobby TEXT, \
      data_nascimento DATE,\
      idade INTEGER\
      )', async (err) => {
        if(err)
          console.log('Table already exists' + err.message)
        
        let sql = `INSERT INTO developers (nome, sobreNome, sexo, hobby, data_nascimento, idade) VALUES (?, ?, ?, ?, ?, ?)`

        await db.run(sql, ["William", "Sakata", "M", "Esportes e programar", "16-10-1997", 23])

        let select = `select * from developers`

        let devs = await  db.run(select)
        console.log(devs)
      })
  }
})