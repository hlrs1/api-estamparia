require('dotenv').config();
const express = require('express');
const cors = require('cors');
const produtoRoutes = require('./src/routes/produtoRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const pedidoRoutes = require('./src/routes/pedidoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Injetando as rotas de produto na API
app.use('/api', produtoRoutes);
app.use('/api', clienteRoutes);
app.use('/api', pedidoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});