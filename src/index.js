const express = require('express')
const perfilRoute = require('./routes/PerfilRoute')
const api = express()
api.use(express.json())
api.use('/perfil' , perfilRoute)
const port = 3000


// Rota Raiz
api.get('/', (req, res) => {
  res.send('Bem-Vindo Ao Perfil Profissional API!')
})

api.listen(port, () => {
  console.log(`Perfil Profissionao API Rodando na porta: ${port} ...`)
})


