'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('m2_usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.CHAR(150)
      },
      idequipe: {
        type: Sequelize.INTEGER,
        references: {
            model: {
                tableName: 'm2_equipes'
            },
            key: 'id'
        },
        allowNull: false
    },
      ativo: {
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.CHAR(30)
      },
      password: {
        type: Sequelize.CHAR(150)
      },
      idusuario: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('m2_usuarios');
  }
};