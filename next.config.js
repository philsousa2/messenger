/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/contatoMessenger/:path*',
        destination: 'https://api.upsilan.com.br/contato/:path*'
      }
    ]
  }
}