const prisma = require('../prisma');

class ClienteService {
    async criarCliente(data) {
        if (!data.nome || !data.email) {
            throw new Error('Nome e e-mail são campos obrigatórios.');
        }

        // Regra de Negócio: Bloquear e-mails duplicados
        const emailJaCadastrado = await prisma.cliente.findUnique({ 
            where: { email: data.email } 
        });

        if (emailJaCadastrado) {
            throw new Error(`O e-mail ${data.email} já está em uso.`);
        }

        return await prisma.cliente.create({
            data: {
                nome: data.nome,
                email: data.email,
                telefone: data.telefone
            }
        });
    }

    async listarClientes() {
        return await prisma.cliente.findMany({
            orderBy: { criado_em: 'desc' }
        });
    }
}

module.exports = new ClienteService();