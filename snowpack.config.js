/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  plugins: [
    '@snowpack/plugin-react-refresh',
    // '@snowpack/plugin-typescript',
  ],
  packageOptions: {
    source: 'remote-next',
    types: true,
    cache: '.snowpack',
  },
  mount: {
    src: '/src',
    public: '/',
  },
  buildOptions: {
    out: 'dist',
    metaUrlPath: 'lib',
    // baseUrl: 'http://127.0.0.1:8080/',
  },
}
