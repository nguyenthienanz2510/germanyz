module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-germanyz.pantheonsite.io',
        port: '',
        pathname: '/',
      },
    ],
    domains: ['dev-germanyz.pantheonsite.io'],
    unoptimized: true,
  },
  webpack: config => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false }
    return config
  },
}
