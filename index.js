const express = require('express')
const app = express()
const port = 3000
const sequelize = require('./db/database')

const M2equipe = require('./db/models/m2equipe')
const M2Usuario = require('./db/models/m2usuario')


sequelize.sync().then(() => console.log('DB esta Online'))

app.use(express.json())

app.post('/m2equipe', async (req, res) => {
  const { dataValues: equipe } = await M2equipe.create(req.body)
  res.status(201).json(equipe)
})

app.get('/m2equipe', async (req, res) => {
  const totalequipe = await M2equipe.findAll()
  res.status(200).send(totalequipe)
})

app.patch('/m2equipe/update/:id', async (req, res) => {
  const { dataValues: equipe } = await M2equipe.findOne({ where: { id: req.params.id } })

  const equipeUpdate = Object.assign({}, { ...equipe, nome: req.body.nome, ativo: req.body.ativo })

  await M2equipe.update(equipeUpdate, { where: { id: req.params.id } })
  res.status(200).json(equipeUpdate)

})

app.get('/m2usuario/ativos', async (req, res) => {
  const ativos = await M2equipe.findAll({
    where: {
      ativo: 1
    }
  })
  res.status(200).json(ativos)
})

///// Segunda parte


app.post('/m2usuario', async (req, res) => {
  const { dataValues: equipe } = await M2Usuario.create(req.body)
  res.status(201).json(equipe)
})

app.get('/m2usuario', async (req, res) => {
  const totalequipe = await M2Usuario.findAll()
  res.status(200).send(totalequipe)
})

app.patch('/m2usuario/update/:id', async (req, res) => {
  const { dataValues: equipe } = await M2Usuario.findOne({ where: { id: req.params.id } })

  const equipeUpdate = Object.assign({}, { ...equipe, nome: req.body.nome, ativo: req.body.ativo })

  await M2Usuario.update(equipeUpdate, { where: { id: req.params.id } })
  res.status(200).json(equipeUpdate)

})

app.get('/m2usuario/ativos', async (req, res) => {
  const ativos = await M2Usuario.findAll({
    where: {
      ativo: 1
    }
  })
  res.status(200).json(ativos)
})


app.listen(port, () => console.log(`Api rodando na porta: ${port}`))