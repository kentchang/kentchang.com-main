import React from 'react'

import get from 'lodash/get'
import map from 'lodash/map'

import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Button from 'components/Button'
import Badge from 'components/Badge'

class BlogIndex extends React.Component {
  render() {
    const { location, data } = this.props
    const posts = get(data, 'remark.posts')
    return (
      <Layout location={location}>
        <Meta
          site={get(data, 'site.meta')}
          title="Queeries, Qualified | Blog"
        />
        <section className="blog-index pt-5">
          <div className="sidebar sticky-top float-md-left card bg-light m-3">
            <div className="card-header">Filter by tags</div>
            <div className="card-body">
              <p>Read only about—</p>
              {/* { 
                                map(sidebarTags, (sidebarTag, i) => {
                                // const sidebarTag = sidebarTag.uni
                                return ( 
                                <Link to={`/blog/tag/${sidebarTag}`}>
                                    <span className="badge badge-primary" key={i}>{sidebarTag}</span>
                                </Link>
                                ) 
                            })} */}
              {/* <a href={`/blog/tag/dh`} className="badge badge-secondary">#DH</a>
                            <a href={`/blog/tag/teaching`} className="badge badge-secondary">#teaching</a>
                            <a href={`/blog/tag/review`} className="badge badge-secondary">#review</a>                  
                            <a href={`/blog/tag/project`} className="badge badge-secondary">#project</a> */}
              <a href={`/blog/tag/misc/`} className="badge badge-secondary">
                #misc
              </a>
            </div>
            <div className="card-header">About</div>
            <div className="card-body">
              <a href="/about/">Kent Chang</a> (author),{' '}
              <a href="/blog/about-blog/">this blog</a>
            </div>
            <div className="card-header">Twitter Feed</div>
            <div className="card-body">
              <a
                className="twitter-timeline"
                data-height="220"
                href="https://twitter.com/KentKChang?ref_src=twsrc%5Etfw"
              >
                Tweets by KentKChang
              </a>
            </div>
          </div>
          <div className="blog-header">
            <div className="container">
              <h1>Blog</h1>
              <h2>Queeriables, Qualified</h2>
              <p className="lead">My shameless shots for shapeless subjects</p>
            </div>
          </div>
          {posts.map(({ post }, i) => {
            const { tags, title, slug, date } = post.frontmatter
            const html = post.html
            const path = '/blog/' + slug + '/'
            const options = {
              isIndex: true,
            }
            const { isIndex } = options
            const isMore = isIndex && !!html.match('<!--more-->')
            return (
              <div className="blog-article mb-2" key={'/blog/' + slug + '/'}>
                <div className="container">
                  <div className="info">
                    <Link
                      style={{ boxShadow: 'none' }}
                      to={'/blog/' + slug + '/'}
                    >
                      <span className="title">{title}</span>
                    </Link>
                    {date} {Badge({ items: tags })}
                  </div>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: isMore ? getDescription(html) : html,
                    }}
                  />
                  {isMore
                    ? Button({ path, label: 'READ MORE', primary: true })
                    : ''}
                </div>
              </div>
            )
          })}
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

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

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            title
            slug
            tags
            date
          }
        }
      }
    }
  }
`
