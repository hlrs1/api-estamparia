const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/PedidoController');

// A rota oficial de checkout
router.post('/pedidos', pedidoController.criar);

module.exports = router;