// const express = require('express');
// const router = express.Router();


// const usersCtrl = require('../controllers/users.ctrl');
// const { route } = require('./products.router');

// router.get('/',usersCtrl.getAll)

// module.exports = usersCtrl

const express = require('express');
const router = express.Router();
const tokenValidator = require('../middlewares/token-validation')

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
router.get('/',tokenValidator,usersCtrl.getAll)
router.get('/:id',tokenValidator,usersCtrl.getById)
router.put('/:id',usersCtrl.updateUser)



module.exports =router;