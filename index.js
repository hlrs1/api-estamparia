require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API de Estamparia Rodando!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});