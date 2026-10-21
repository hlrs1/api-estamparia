const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/ClienteController');

router.post('/clientes', clienteController.criar);
router.get('/clientes', clienteController.listar);

module.exports = router;