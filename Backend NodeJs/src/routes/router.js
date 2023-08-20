const express = require('express');
const router = express.Router();
const routerProducts = require('./productRoutes')
const auth = require('../security/Jwt')


router.use(auth.verifyToken)
router.use(routerProducts)

module.exports  = router