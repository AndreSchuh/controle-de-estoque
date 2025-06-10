require('dotenv').config(); // Carrega variáveis do .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Permite requisições de outros domínios

// Conexão com o MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao MongoDB Atlas!'))
  .catch(err => console.error('Erro na conexão:', err));

// Inicia o servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
