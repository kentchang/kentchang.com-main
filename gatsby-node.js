const _ = require('lodash')
const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const PostTemplate = path.resolve('./src/templates/Post.js')
    const TagTemplate = path.resolve('./src/templates/Tag.js')
    // const TagTemplate = path.resolve('./src/templates/Tag/index.js')
    resolve(
      graphql(
        `
          {
            allFile(filter: { extension: { regex: "/md|js/" } }, limit: 1000) {
              edges {
                node {
                  id
                  name: sourceInstanceName
                  path: absolutePath
                  remark: childMarkdownRemark {
                    id
                    frontmatter {
                      slug
                      tags
                    }
                  }
                }
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

        const items = data.allFile.edges
        const posts = items.filter(({ node }) => /posts/.test(node.name))

        each(posts, ({ node }) => {
          if (!node.remark) return
          const { slug } = node.remark.frontmatter
          createPage({
            path: '/blog/' + slug + '/',
            component: PostTemplate,
            context: {
              slug: node.remark.frontmatter.slug,
            },
          })
        })

        let allTags = []

        each(posts, ({ node }) => {
          if (!node.remark) return

          const { tags } = node.remark.frontmatter
          allTags = allTags.concat(tags)
          allTags = _.uniq(allTags)

          allTags.forEach(tag => {
            createPage({
              path: '/blog/tag/' + tag + '/',
              component: TagTemplate,
              context: {
                tag: tag,
              },
            })
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
