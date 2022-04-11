const express = require('express')
const router = express.Router()

let geradorID = 8

//Estrutura de Dados
let perfis = [
  {
    usuario: {
      email: "email1@email.com",
      senha: "12332141"
    },
    nome: "User 1",
    dataNascmimento: "2022-02-14T00:00:00.000Z",
    disponibilidadeMudanca: true,
    disponibilidadeHorario: "Integral",
    educacao: [
      {
        instituicao: "Escola 1",
        ingresso: "2022-02-14T00:00:00.000Z",
        conclusao: "2022-02-14T00:00:00.000Z",
        nivelEscolaridade: "Ensino Superior"
      }
    ],
    certificoes: [
      {
        instituicao: "High Tech Cursos",
        titulo: "Fábrica de Programador",
        cargaHoraria: 80
      }
    ],
    conexoes: [],
    id: 1,
  },
  {
    usuario: {
      email: "email2@email.com",
      senha: "12332142"
    },
    nome: "User 2",
    dataNascmimento: "2022-02-14T00:00:00.000Z",
    disponibilidadeMudanca: true,
    disponibilidadeHorario: "Integral",
    educacao: [
      {
        instituicao: "Escola 1",
        ingresso: "2022-02-14T00:00:00.000Z",
        conclusao: "2022-02-14T00:00:00.000Z",
        nivelEscolaridade: "Ensino Superior"
      }
    ],
    certificoes: [
      {
        instituicao: "High Tech Cursos",
        titulo: "Fábrica de Programador",
        cargaHoraria: 80
      }
    ],
    conexoes: [],
    id: 2,
  },
  {
    usuario: {
      email: "email3@email.com",
      senha: "12332143"
    },
    nome: "User 3",
    dataNascmimento: "2022-02-14T00:00:00.000Z",
    disponibilidadeMudanca: true,
    disponibilidadeHorario: "Integral",
    educacao: [
      {
        instituicao: "Escola 1",
        ingresso: "2022-02-14T00:00:00.000Z",
        conclusao: "2022-02-14T00:00:00.000Z",
        nivelEscolaridade: "Ensino Superior"
      }
    ],
    certificoes: [
      {
        instituicao: "High Tech Cursos",
        titulo: "Fábrica de Programador",
        cargaHoraria: 80
      }
    ],
    conexoes: [],
    id: 3,
  },
  {
    usuario: {
      email: "email4@email.com",
      senha: "12332141"
    },
    nome: "User 4",
    dataNascmimento: "2022-02-14T00:00:00.000Z",
    disponibilidadeMudanca: true,
    disponibilidadeHorario: "Integral",
    educacao: [
      {
        instituicao: "Escola 1",
        ingresso: "2022-02-14T00:00:00.000Z",
        conclusao: "2022-02-14T00:00:00.000Z",
        nivelEscolaridade: "Ensino Superior"
      }
    ],
    certificoes: [
      {
        instituicao: "High Tech Cursos",
        titulo: "Fábrica de Programador",
        cargaHoraria: 80
      }
    ],
    conexoes: [],
    id: 4,
  },
  {
    usuario: {
      email: "email5@email.com",
      senha: "12332141"
    },
    nome: "User 5",
    dataNascmimento: "2022-02-14T00:00:00.000Z",
    disponibilidadeMudanca: true,
    disponibilidadeHorario: "Integral",
    educacao: [
      {
        instituicao: "Escola 1",
        ingresso: "2022-02-14T00:00:00.000Z",
        conclusao: "2022-02-14T00:00:00.000Z",
        nivelEscolaridade: "Ensino Superior"
      }
    ],
    certificoes: [
      {
        instituicao: "High Tech Cursos",
        titulo: "Fábrica de Programador",
        cargaHoraria: 80
      }
    ],
    conexoes: [],
    id: 5,
  },
  {
    usuario: {
      email: "email6@email.com",
      senha: "12332146"
    },
    nome: "User 6",
    dataNascmimento: "2022-02-14T00:00:00.000Z",
    disponibilidadeMudanca: true,
    disponibilidadeHorario: "Integral",
    educacao: [
      {
        instituicao: "Escola 1",
        ingresso: "2022-02-14T00:00:00.000Z",
        conclusao: "2022-02-14T00:00:00.000Z",
        nivelEscolaridade: "Ensino Superior"
      }
    ],
    certificoes: [
      {
        instituicao: "High Tech Cursos",
        titulo: "Fábrica de Programador",
        cargaHoraria: 80
      }
    ],
    conexoes: [],
    id: 6,
  },
  {
    usuario: {
      email: "email7@email.com",
      senha: "12332147"
    },
    nome: "User 7",
    dataNascmimento: "2022-02-14T00:00:00.000Z",
    disponibilidadeMudanca: true,
    disponibilidadeHorario: "Integral",
    educacao: [
      {
        instituicao: "Escola 1",
        ingresso: "2022-02-14T00:00:00.000Z",
        conclusao: "2022-02-14T00:00:00.000Z",
        nivelEscolaridade: "Ensino Superior"
      }
    ],
    certificoes: [
      {
        instituicao: "High Tech Cursos",
        titulo: "Fábrica de Programador",
        cargaHoraria: 80
      }
    ],
    conexoes: [],
    id: 7,
  }

]

// Rota de Perfil
  router.get('', (req, res) => {
    res.json(perfis.length > 5 ? perfis.slice(perfis.length - 5) : perfis)
  })
  
  router.get(':id', (req, res) => {
    let perfilID = req.params.id
  
    let perfilEcontrado = perfis.find(perfil => perfil.id == perfilID)
    if (perfilEcontrado) res.json(perfilEcontrado)
    else res.status(400).json({
      message: "Erro ao buscar perfil : Objeto nao encontrado"
    })
  })
  
  router.post('', (req, res) => {
    let novoPerfil = req.body
    console.log(novoPerfil);
    if (novoPerfil) {
      novoPerfil.id = geradorID
      perfis.push(novoPerfil)
  
      geradorID++
      res.json(novoPerfil)
    } else {
      res.status(400).json({
        message: "Erro ao cadastrar perfil : Dados Incompletos!"
      })
    }
  })
  
  router.put(':id', (req, res) => {
    let perfilID = req.params.id
    let perfilEditado = req.body
  
    if (perfilEditado) {
      let perfilIndex = perfis.findIndex(perfil => perfil.id == perfilID)
  
      if (perfilIndex != -1) {
        let perfilRetorno = perfis[perfilIndex]
        perfilEditado.id = perfilID
        perfis.splice(perfilIndex, 1, perfilEditado)
  
        res.json(perfilRetorno)
      } else {
        res.json({
          message: "Erro ao editar perfil : Perfil não Encontrado!"
  
        })
      }
    } else {
      res.status(400).json({
        message: "Erro ao editar perfil : Dados Imcompletos!"
      })
    }
  })
  
  router.post('conexao', (req, res) => {
    let info = req.body
  
    if (info.remetente && info.destinatario) {
      let remetenteID = info.remetente
      let destinatarioID = info.destinatario
  
      let remetente = perfis.find(perfil => perfil.id == remetenteID)
      let destinatario = perfis.find(perfil => perfil.id == destinatarioID)
  
      if (remetente && destinatario) {
        remetente.conexoes.push(destinatarioID)
        destinatario.conexoes.push(remetenteID)
  
        res.json({
          message: "Conexão estabelecida com sucesso"
        })
  
      } else {
        res.json({
          message: "Erro ao estabelecer conexão : Peril não encontrado"
        })
      }
    } else {
      res.status(400).json({
        message: "Erro ao estabelecer conexao : Dados Imcompletos!"
      })
    }
  
  })
  

  module.exports = router