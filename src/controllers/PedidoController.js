const pedidoService = require('../services/PedidoService');

class PedidoController {
    async criar(req, res) {
        try {
            // Repassa o payload do Insomnia diretamente para o maestro (Service)
            const pedido = await pedidoService.criarPedido(req.body);
            return res.status(201).json(pedido);
        } catch (error) {
            // Qualquer erro de validação (cliente não achado, etc) cai aqui
            return res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = new PedidoController();