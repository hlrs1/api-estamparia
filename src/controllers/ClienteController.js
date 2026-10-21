const clienteService = require('../services/ClienteService');

class ClienteController {
    async criar(req, res) {
        try {
            const cliente = await clienteService.criarCliente(req.body);
            return res.status(201).json(cliente);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async listar(req, res) {
        try {
            const clientes = await clienteService.listarClientes();
            return res.status(200).json(clientes);
        } catch (error) {
            return res.status(500).json({ erro: 'Erro interno ao buscar clientes.' });
        }
    }
}

module.exports = new ClienteController();