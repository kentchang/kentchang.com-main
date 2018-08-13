import React from 'react'

import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import get from 'lodash/get'
import map from 'lodash/map'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

import Icon from 'components/Icon'
import Button from 'components/Button'
import Badge from 'components/Badge'

import Disqus from 'disqus-react'

class Post extends React.Component {
  render() {
    const { location, data } = this.props
    const post = data.markdownRemark
    const { tags, title, slug, date } = data.markdownRemark.frontmatter
    const path = '/blog/' + slug + '/'
    const html = get(data, 'markdownRemark.html')
    const disqusConfig = {
      url: `https://kentchang.com/blog/${location.pathname}`,
      identifier: `${this.props.location.pathname}`,
      title: title,
    }
    return (
      <Layout location={location}>
        <Meta site={get(this, 'props.data.site.meta')} />
        <section className="blog-post pt-3">
          <div className="container" key={'/blog/' + slug + '/'}>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/blog">Go back to blog</a>
                </li>
              </ol>
            </nav>
            <div className="info row">
              <div className="col-md-6">
                <time dateTime={date}>{date}</time>
                {Badge({ items: tags, primary: true })}
              </div>
              <div className="col-md-6 text-right">
                by{' '}
                <strong>
                  <a href="/about/">Kent Chang</a>
                </strong>
                <a href="https://twitter.com/KentKChang">
                  <Icon
                    prefix="fab"
                    name="twitter-square"
                    className="twitter"
                  />
                </a>
                <a href="https://www.facebook.com/kentkchang">
                  <Icon
                    prefix="fab"
                    name="facebook-square"
                    className="facebook"
                  />
                </a>
                <a href="https://kentchang.com/contact/">
                  <Icon prefix="fas" name="envelope" className="envelope" />
                </a>
              </div>
            </div>
            <h1>{title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
            <hr />
            <Disqus.DiscussionEmbed
              shortname="queeries-qualified"
              config={disqusConfig}
            />
          </div>
        </section>
      </Layout>
    )
  }
}

export default Post

export const pageQuery = graphql`
  query postQueryBySlug($slug: String!) {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

const getDescription = body => {
  body = body.replace(/<blockquote>/g, '<blockquote class="blockquote">')
  if (body.match('<!--more-->')) {
    body = body.split('<!--more-->')
    if (typeof body[0] !== 'undefined') {
      return body[0]
    }
  }
  return body
}
