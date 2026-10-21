require('dotenv').config();
const express = require('express');
const produtoRoutes = require('./src/routes/produtoRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');

const app = express();
app.use(express.json());

// Injetando as rotas de produto na API
app.use('/api', produtoRoutes);
app.use('/api', clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});