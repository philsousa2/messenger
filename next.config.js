/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/contatoMessenger/:path*',
        destination: 'https://api.upsilan.com.br/form_contato/:path*'
      },
      {
        source: '/contaMessenger/:path*',
        destination: 'https://api.upsilan.com.br/form_conta/:path*'
        /*headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          //{ key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]*/
      },
      {
        source: '/cotacaoMessenger/:path*',
        destination: 'https://api.upsilan.com.br/form_cotacao/:path*'
      },
      {
        source: '/coletaMessenger/:path*',
        destination: 'https://api.upsilan.com.br/form_coleta/:path*'
      },
      {
        source: '/ewbMessenger/:path*',
        destination: 'https://api.upsilan.com.br/ewb/:path*'
      },
      {
        source: '/rastreamentoMessenger/:path*',
        destination: 'https://api.upsilan.com.br/rastreamentoBrudam/:path*'
      }
    ]
  }
}