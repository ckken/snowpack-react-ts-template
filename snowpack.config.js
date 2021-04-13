/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  plugins: [
    '@snowpack/plugin-react-refresh',
    // '@snowpack/plugin-typescript',
  ],
  packageOptions: {
    source: 'remote',
    types: true,
  },
  mount: {
    src: '/dist',
    public: '/',
  },
}
