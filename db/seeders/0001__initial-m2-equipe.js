module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('m2_equipes', [{
            nome: 'Analistas',
            idequipe: 1,
            ativo: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nome: 'Testes',
            idequipe: 1,
            ativo: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Infra',
            idequipe: 1,
            ativo: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Frontend',
            idequipe: 1,
            ativo: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Backend',
            idequipe: 1,
            ativo: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'RH',
            idequipe: 1,
            ativo: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Financeiro',
            idequipe: 1,
            ativo: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Advogados',
            idequipe: 1,
            ativo: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('m2_equipes', null, {});
    }
};