const Router = require('router')

const obtainCompras = require('../controllers/compras.controllers.js')

const router = Router();

router.get("/",obtainCompras);



module.exports = router