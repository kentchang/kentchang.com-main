import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Button from 'components/Button'

class Contact_Thanks extends React.Component {
  render() {
    const { location, data } = this.props
    return (
      <Layout location={location}>
        <Meta site={get(data, 'site.meta')} title="About" />
        <section className="contact pt-5">
          <div className="container">
            <h1>Contact</h1>
            <p>Thanks for contacting me. I will get back to you shortly.</p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Go back home</a>
                </li>
              </ol>
            </nav>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Contact_Thanks

export const pageQuery = graphql`
  query ContactThanksQuery {
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
