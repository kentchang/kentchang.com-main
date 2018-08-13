import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post.js'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Button from 'components/Button'

class Home extends React.Component {
  render() {
    const { location, data } = this.props
    return (
      <Layout location={location}>
        <Meta site={get(data, 'site.meta')} title="Index" />
        <div className="home align-middle">
          <section id="home">
            <div className="container">
              <div className="row">
                <div className="col-md-6" />
                <div className="col-md-6 text-center">
                  <h1 className="text-hide">Kent K. Chang</h1>
                  <div className="home-info">
                    <p>
                      I code in Python to study Oscar Wilde and his kind – and a
                      few other things.{' '}
                    </p>
                    {Button({ path: '/about/', label: 'About', primary: true })}{' '}
                    {Button({ path: '/blog/', label: 'Blog', primary: true })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
  }
`
