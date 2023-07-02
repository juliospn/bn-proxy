const axios = require('axios');
const express = require('express');
const cors = require('cors');
const convert = require('xml-js');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json({ limit: '1mb' })); // Definir limite de 1mb para o tamanho do cabeçalho

app.use(cors()); // Permitir requisições de qualquer origem

app.get('/feed', async (req, res) => {
  try {
    console.log('Fetching RSS feed...');
    const response = await axios.get('https://bitcoinnews.com/feed/gn');
    console.log('RSS feed fetched successfully');

    // Convertendo XML para objeto JavaScript
    const options = { compact: true, ignoreComment: true, spaces: 4 };
    const result = convert.xml2js(response.data, options);

    // Adicione o cabeçalho Access-Control-Allow-Origin
    res.header('Access-Control-Allow-Origin', '*');
    
    // Enviando o feed como JSON
    res.json(result);
  } catch (error) {
    console.error('Error retrieving RSS feed:', error.message);
    res.status(500).send('Error retrieving RSS feed');
  }
});

app.listen(port, () => {
  console.log(`Servidor proxy rodando em http://localhost:${port}`);
});

module.exports = app;
