module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('m2_usuarios', [{
            nome: 'Pedro Santos',
			idequipe: 1,
            ativo: 1,
            login: 'pedrosantos',
            password: 'admin',
            idusuario: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nome: 'Vitor Cabral',
			idequipe: 1,
            ativo: 1,
            login: 'vitorcabral',
            password: 'admin',
            idusuario: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Paulo Bittencourt',
			idequipe: 1,
            ativo: 0,
            login: 'paulobitt',
            password: 'admin',
            idusuario: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Carlos Pereira',
			idequipe: 1,
            ativo: 1,
            login: 'carlospereira',
            password: 'admin',
            idusuario: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Nina Tavares',
			idequipe: 1,
            ativo: 1,
            login: 'ninatavares',
            password: 'admin',
            idusuario: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Paulo Roberto',
			idequipe: 1,
            ativo: 1,
            login: 'paulobeto',
            password: 'admin',
            idusuario: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Lucas Santos',
			idequipe: 1,
            ativo: 1,
            login: 'lucassantos',
            password: 'admin',
            idusuario: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Betina Ribeiro',
			idequipe: 1,
            ativo: 1,
            login: 'betinaribeiro',
            password: 'admin',
            idusuario: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Diego Galdino',
			idequipe: 1,
            ativo: 1,
            login: 'dieguito',
            password: 'admin',
            idusuario: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            nome: 'Karolyne Faria',
			idequipe: 1,
            ativo: 1,
            login: 'karolzinha',
            password: 'admin',
            idusuario: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('m2_usuarios', null, {});
    }
};