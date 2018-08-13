import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Button from 'components/Button'

class Contact extends React.Component {
  render() {
    const { location, data } = this.props
    return (
      <Layout location={location}>
        <Meta site={get(data, 'site.meta')} title="About" />
        <section className="contact pt-5">
          <div className="container">
            <h1>Contact</h1>
            <p>
              Powered by <a href="https://formspree.io/">Formspree</a>. You may
              be redirected to its website and presented with re
              <span className="sc">CAPTCHA</span> questions before you can
              submit the form. If you don’t believe it’s safe you may also email
              me at{' '}
              <code>
                kent
                <span className="email-domain">kentchang.com</span>
              </code>
              , or <span className="sc">DM</span> me{' '}
              <a href="https://twitter.com/KentKChang">@KentKChang</a>.
            </p>
            <hr />
            <form
              action={'https://formspree.io/kent@kentchang.com'}
              method="POST"
            >
              <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    name="_replyto"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Subject
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Subject line"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Message
                </label>
                <div className="col-sm-10">
                  <textarea className="form-control" name="name" rows="5" />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12">
                  <input type="hidden" name="_next" value="/contact_thanks" />
                  <input
                    type="submit"
                    value="Send message"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
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
