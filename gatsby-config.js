module.exports = {
  siteMetadata: {
    name: 'Cleiton',
    title: 'Web Developer',
    titleTemplate: "Cleiton · %s",
    description:
      'Site de um desenvolvedor javascript, ' +
      'entuasiasta de novas tecnologias do mundo de desenvolvimento web ' +
      'e fã de destribuições Linux.',
    banner: '/img/banner/default.png',
    bannerAlt:
      'Logo do Site. A letra C na cor branca ' +
      'por cima de um quadradro preto com cantos arredondados.',
    siteUrl: 'http://localhost:8000',
    twitter: '@cleitonsper',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jobs',
        path: `${__dirname}/src/content/jobs`,
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          "~src": "src",
          "~assets": "src/assets",
          "~components": "src/components",
          "~templates": "src/templates",
          "~layouts": "src/layouts",
          "~pages": "src/pages",
          "~hooks": "src/hooks",
          "~types": "src/types",
        },
        extensions: [
          "js",
          "ts",
          "jsx",
          "tsx",
        ],
      },
    },
  ],
};