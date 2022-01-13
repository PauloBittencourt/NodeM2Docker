

## NodeM2Docker

[![Author](https://img.shields.io/badge/author-PauloBittencourt-8257E5?style=flat-square)](https://github.com/paulobittencourt)


<h4 align="center">
  This is a API from M2 Digital.
</h4>


## Tecnologies

This project was developed using cutting edge back-end technologies.


- [NodeJS](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express/)
- [Nodemon](https://www.npmjs.com/package/nodemon/)
- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/master/)


## 💻 Getting started

### Requirements

- You need to install both [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) to run this project.

**Clone the project and access the folder**

```bash
$ git clone https://github.com/PauloBittencourt/Rentalxt && cd Rentalx
```

**Follow the steps below**
```
with Docker installed and repository, run the command in the console:

docker build .
```


```bash
# Install the dependencies
$ npm i

# Install Yarn
$ npm install --global yarn

# Run the web server
$ npm run dev
```

The app will be available for access on your browser at `http://localhost:3000`


```
# Creating table from M2Equipes at  `http://localhost:3000/m2equipe`  (POST)
example :
            nome: 'Analistas',
            idequipe: 1,
            ativo: 1,
            createdAt: new Date(),
            updatedAt: new Date()
            
# Creating table from M2Usuarios at  `http://localhost:3000/m2usuario` (POST)
example :
            nome: 'Pedro Santos',
			      idequipe: 1,
            ativo: 1,
            login: 'pedrosantos',
            password: 'admin',
            idusuario: 1,
            createdAt: new Date(),
            updatedAt: new Date()
            
# Getting all tables from M2Equipes at  `http://localhost:3000/m2equipe`  (GET)

# Getting all tables from M2Usuarios at  `http://localhost:3000/m2usuarios`  (GET)

# Disable table from M2Equipes at `http://localhost:3000//m2equipe/update/:id` (PATCH)

# Disable table from M2Usuario at `http://localhost:3000//m2usuario/update/:id` (PATCH)

# Calling all actives tables from M2Equipes at `http://localhost:3000/m2equipe/ativos`  (GET)

# Calling all actives tables from M2Usuario at `http://localhost:3000/m2usuario/ativos`  (GET)
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Paulo Bittencourt 👋 [Check out my LinkedIn](https://www.linkedin.com/in/paulobittencourt2077/)
