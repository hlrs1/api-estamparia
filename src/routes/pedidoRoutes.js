const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/PedidoController');

// A rota oficial de checkout
router.post('/pedidos', pedidoController.criar);
router.get('/pedidos', pedidoController.listar);

module.exports = router;