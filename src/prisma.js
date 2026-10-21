const { PrismaClient } = require('@prisma/client');

// Instância única do Prisma para toda a aplicação
const prisma = new PrismaClient();

module.exports = prisma;