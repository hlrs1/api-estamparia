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

    async listar(req, res) {
    try {
        const pedidos = await pedidoService.listarPedidos();
        return res.status(200).json(pedidos);
    } catch (error) {
        return res.status(500).json({ erro: 'Falha ao buscar métricas de pedidos' });
    }
}
}

module.exports = new PedidoController();