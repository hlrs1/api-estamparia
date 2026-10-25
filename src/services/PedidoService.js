const prisma = require('../prisma');

class PedidoService {
    async criarPedido(data) {
        // Valida a estrutura básica do payload que chegou da internet
        if (!data.cliente_id || !data.itens || data.itens.length === 0 || !data.gateway_pagamento) {
            throw new Error('Dados incompletos. Informe o cliente, gateway e ao menos um item.');
        }

        // Valida se a pessoa que está comprando realmente existe
        const clienteExiste = await prisma.cliente.findUnique({
            where: { id: data.cliente_id }
        });
        if (!clienteExiste) {
            throw new Error('Cliente informado não existe na base.');
        }

        let totalCalculado = 0;
        const itensTratados = [];

        // Inspeciona item a item do carrinho
        for (const item of data.itens) {
            const produtoBD = await prisma.produto.findUnique({
                where: { id: item.produto_id }
            });

            if (!produtoBD) {
                throw new Error(`Produto com ID ${item.produto_id} não encontrado.`);
            }

            // A matemática de negócios
            const precoItem = parseFloat(produtoBD.preco_base);
            totalCalculado += precoItem * item.quantidade;

            // Prepara a gaveta de dados para salvar no banco
            itensTratados.push({
                produto_id: produtoBD.id,
                quantidade: item.quantidade,
                preco_unitario: precoItem
            });
        }

        // Transação: A operação cirúrgica. 
        // O Prisma só confirma a operação se as tabelas Pedido e ItemPedido forem escritas juntas.
        const pedidoCriado = await prisma.pedido.create({
            data: {
                cliente_id: data.cliente_id,
                gateway_pagamento: data.gateway_pagamento,
                total: totalCalculado,
                status: 'AGUARDANDO_PAGAMENTO',
                itens: {
                    create: itensTratados // O Prisma gerencia a chave estrangeira automaticamente
                }
            },
            include: {
                itens: true // Já devolve os itens na mesma consulta de resposta
            }
        });

        return pedidoCriado;
    }
}

module.exports = new PedidoService();