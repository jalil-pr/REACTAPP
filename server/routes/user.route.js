const router = require('express').Router();
const {findAll, login, register}  = require('../controller/user.controller')
const {authenticateJWT} = require('../utils/jwtUtils');


router.get('/', authenticateJWT, findAll);

router.post('/login', login);
router.post('/register', register);

module.exports = router;