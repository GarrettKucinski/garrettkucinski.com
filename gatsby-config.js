'use strict'

module.exports = {
  siteMetadata: {
    title: 'The Personal Portfolio of Garrett Kucinski',
    description: 'A personal site containing the development work and blog of Garrett Kucinski, software engineer and architect',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://www.garrettkucinski.com',
    author: {
      name: 'Garrett Kucinski',
      url: 'https://twitter.com/realgarrettk',
      email: 'garrett.kucinski@gmail.com'
    }
  },
  plugins: [{
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.garrettkucinski.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
