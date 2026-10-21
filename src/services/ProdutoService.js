const prisma = require('../prisma');

class ProdutoService {
    async criarProduto(data) {
        // Validação de negócio básica
        if (!data.sku || !data.nome || !data.preco_base || !data.tipo) {
            throw new Error('Campos obrigatórios ausentes: sku, nome, preco_base ou tipo.');
        }

        const produtoExiste = await prisma.produto.findUnique({ where: { sku: data.sku } });
        if (produtoExiste) {
            throw new Error(`O SKU ${data.sku} já está cadastrado.`);
        }

        return await prisma.produto.create({
            data: {
                sku: data.sku,
                nome: data.nome,
                descricao: data.descricao,
                preco_base: data.preco_base,
                tipo: data.tipo,
                estoque: data.estoque || 0
            }
        });
    }

    async listarProdutos() {
        return await prisma.produto.findMany({
            where: { ativo: true },
            orderBy: { nome: 'asc' }
        });
    }
}

module.exports = new ProdutoService();