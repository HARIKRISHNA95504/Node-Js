// const express = require('express');
// const router = express.Router();


// const usersCtrl = require('../controllers/users.ctrl');
// const { route } = require('./products.router');

// router.get('/',usersCtrl.getAll)

// module.exports = usersCtrl

const express = require('express');
const router = express.Router();

//import the productsCtrls
const usersCtrl = require('../controllers/users.ctrl')

// router.get('/:id',usersCtrl.getById)
// router.get('/',usersCtrl.getAll)
// router.delete('/:id',usersCtrl.delete)
// router.post('/',usersCtrl.create)
// router.put('/:id',usersCtrl.update)



router.post('/register',usersCtrl.register)
router.post('/login-with-password',usersCtrl.loginWithPassword)
router.delete('/:id',usersCtrl.deleteUser)
router.get('/:id',usersCtrl.getById)
router.get('/',usersCtrl.getAll)
router.put('/:id',usersCtrl.updateUser)



module.exports =router;