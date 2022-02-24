const Router = require('express').Router()

const ApiControllers = require('../controllers/ApiControllers')


const {getPhone} = ApiControllers



// rutas para los usuarios

Router.route('/phone')
.get(getPhone)

// Router.route('/auth/signin')
// .post(userLoged)

// // rutas de las notas

// Router.route('/notas')
// .post(newNotas)

// Router.route('/notas/:id')
// .get(getNotasById)
// .put(updateNotas)
// .delete(deleteNotas)


module.exports = Router