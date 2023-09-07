/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Add a custom webpack rule for binary files
      config.module.rules.push({
        test: /\.(bin|node)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '_next',
            outputPath: 'static/chunks/',
            name: '[name].[hash].[ext]',
          },
        },
      });
  
      return config;
    },
  };
  