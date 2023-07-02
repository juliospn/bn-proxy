const express = require('express');
const cors = require('cors');
const convert = require('xml-js');
const axios = require('axios');
const i18next = require('i18next');
const i18nextHttpMiddleware = require('i18next-http-middleware');
const i18nextBackend = require('i18next-fs-backend');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json({ limit: '1mb' }));
app.use(cors());

// Configurando i18next
i18next
  .use(i18nextBackend)
  .use(i18nextHttpMiddleware.LanguageDetector)
  .init({
    fallbackLng: 'en', // Idioma padrão caso a tradução não seja encontrada
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json', // Pasta onde as traduções estão armazenadas
    },
  });

app.use(i18nextHttpMiddleware.handle(i18next));

app.get('/feed-pt', async (req, res) => {
  try {
    console.log('Fetching RSS feed...');
    const response = await axios.get('https://bitcoinnews.com/feed/gn');
    console.log('RSS feed fetched successfully');

    // Convertendo XML para objeto JavaScript
    const options = { compact: true, ignoreComment: true, spaces: 4 };
    const result = convert.xml2js(response.data, options);

    // Traduzir o conteúdo usando i18next
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

  // Traduzir cada item de conteúdo usando i18next
  for (const item of contentItems) {
    const originalContent = item.description._text;

    // Traduzir o conteúdo usando i18next
    const translatedContent = await i18next.t(originalContent, { lng: 'pt' });

    // Atualizar o conteúdo traduzido no objeto feed
    item.description._text = translatedContent;
  }
}

app.listen(port, () => {
  console.log(`Servidor proxy rodando em http://localhost:${port}`);
});

module.exports = app;
