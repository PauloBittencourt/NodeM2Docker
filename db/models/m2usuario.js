const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class M2Usuarios extends Model { }

M2Usuarios.init({
  nome: { type: DataTypes.STRING(150) },
  idequipe: { type: DataTypes.STRING },
  ativo: { type: DataTypes.INTEGER },
  login: { type: DataTypes.STRING(30) },
  password: { type: DataTypes.STRING(150) },
  idequipe: {
    type: DataTypes.INTEGER,
    references: {
        model: {
            tableName: 'm2_equipes',
        },
        key: 'id'
    },
    allowNull: false
}


}, {
  sequelize,
  modelName: 'M2Usuarios',
})

module.exports = M2Usuarios