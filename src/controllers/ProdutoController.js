const produtoService = require('../services/ProdutoService');

class ProdutoController {
    async criar(req, res) {
        try {
            const produto = await produtoService.criarProduto(req.body);
            return res.status(201).json(produto);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async listar(req, res) {
        try {
            const produtos = await produtoService.listarProdutos();
            return res.status(200).json(produtos);
        } catch (error) {
            return res.status(500).json({ erro: 'Erro interno ao buscar produtos.' });
        }
    }
}

module.exports = new ProdutoController();