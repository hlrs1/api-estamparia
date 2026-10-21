const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/ProdutoController');

router.post('/produtos', produtoController.criar);
router.get('/produtos', produtoController.listar);

module.exports = router;