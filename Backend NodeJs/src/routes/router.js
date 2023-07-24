const express = require('express');
const router = express.Router();
const routerProducts = require('./productRoutes')

router.route('/').get( (req,res) => {
    res.send('Hola')
})

router.use(routerProducts)

module.exports  = router