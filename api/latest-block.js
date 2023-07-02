const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json({ limit: '1mb' })); // Definir limite de 1mb para o tamanho do cabeçalho

// Configurar o middleware CORS
app.use(cors());

app.get('/latest-block', async (req, res) => {
  try {
    console.log('Fetching Blockchain metrics...');
    const response = await axios.get('https://blockchain.info/latestblock');
    console.log('Blockchain metrics fetched successfully');

    // Adicionar cabeçalho Connection: keep-alive
    res.header('Connection', 'keep-alive');

    // Adicionar cabeçalho Access-Control-Allow-Origin para permitir solicitações de qualquer origem
    res.header('Access-Control-Allow-Origin', '*');

    // Configurar o cabeçalho Content-Security-Policy para permitir o carregamento da fonte
    res.header('Content-Security-Policy', "font-src 'self' https://blockchain.info/latestblock");

    // Enviar os dados de métricas como resposta
    res.json(response.data);
  } catch (error) {
    console.error('Error retrieving blockchain metrics:', error.message);
    res.status(500).send('Error retrieving blockchain metrics');
  }
});

app.listen(port, () => {
  console.log(`Servidor proxy rodando em http://localhost:${port}/latest-block`);
});

module.exports = app;
