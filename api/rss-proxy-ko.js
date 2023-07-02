const axios = require('axios');
const express = require('express');
const cors = require('cors');
const convert = require('xml-js');
const { Translate } = require('google-translate-api');
const i18next = require('i18next');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json({ limit: '1mb' }));
app.use(cors());

app.get('/feed-ko', async (req, res) => {
  try {
    console.log('Fetching RSS feed...');
    const response = await axios.get('https://bitcoinnews.com/feed/gn');
    console.log('RSS feed fetched successfully');

    // Convertendo XML para objeto JavaScript
    const options = { compact: true, ignoreComment: true, spaces: 4 };
    const result = convert.xml2js(response.data, options);

    // Traduzir o conteúdo usando o i18next e o google-translate-api
    await translateContent(result);

    // Adicionar o cabeçalho Access-Control-Allow-Origin
    res.header('Access-Control-Allow-Origin', '*');
    
    // Enviar o feed traduzido como JSON
    res.json(result);
  } catch (error) {
    console.error('Error retrieving RSS feed:', error.message);
    res.status(500).send('Error retrieving RSS feed');
  }
});

async function translateContent(feed) {
  const contentItems = feed.rss.channel.item;

  // Configurar o i18next
  await i18next.init({
    lng: 'pt', // Definir o idioma de destino
    resources: {
      pt: {
        translation: {} // Adicionar traduções específicas para o idioma de destino, se necessário
      }
    }
  });

  // Traduzir cada item de conteúdo usando o google-translate-api
  for (const item of contentItems) {
    const originalContent = item.description._text;

    // Traduzir o conteúdo usando o google-translate-api
    const translatedContent = await translateText(originalContent, 'pt'); // Definir o idioma de destino

    // Atualizar o conteúdo traduzido no objeto feed
    item.description._text = translatedContent;
  }
}

async function translateText(text, targetLanguage) {
  try {
    const translation = await Translate(text, { to: targetLanguage });
    return translation.text;
  } catch (error) {
    console.error('Error translating text:', error.message);
    return text; // Em caso de erro, retornar o texto original
  }
}

app.listen(port, () => {
  console.log(`Servidor proxy rodando em http://localhost:${port}`);
});

module.exports = app;
