import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const LayoutQuery = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={LayoutQuery}
    render={({ site: { siteMetadata } }: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: siteMetadata.description
            },
            {
              name: 'keywords',
              content: siteMetadata.keywords
            }
          ]}
        />
        <Header title={siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
