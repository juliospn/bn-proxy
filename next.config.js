const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/feed',
        destination: '/api/rss-proxy.js',
      },
      {
        source: '/feed-pt',
        destination: '/api/rss-proxy-pt.js',
      },
      {
        source: '/feed-es',
        destination: '/api/rss-proxy-es.js',
      },
      {
        source: '/feed-de',
        destination: '/api/rss-proxy-de.js',
      },
      {
        source: '/feed-tr',
        destination: '/api/rss-proxy-tr.js',
      },
      {
        source: '/feed-ko',
        destination: '/api/rss-proxy-ko.js',
      },
      {
        source: '/feed-ja',
        destination: '/api/rss-proxy-ja.js',
      },
      {
        source: '/lightning-metrics',
        destination: '/api/proxy-1ml.js',
      },
      {
        source: '/latest-block',
        destination: '/api/latest-block.js',
      },
    ];
  },
};

module.exports = nextConfig;
