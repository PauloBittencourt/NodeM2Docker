const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class M2Equipes extends Model { }

M2Equipes.init({
  nome: { type: DataTypes.STRING(150) },
  idequipe: { type: DataTypes.INTEGER },
  ativo: { type: DataTypes.INTEGER },

}, {
  sequelize,
  modelName: 'M2Equipes',
})

module.exports = M2Equipes