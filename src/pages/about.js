import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Button from 'components/Button'

class About extends React.Component {
  render() {
    const { location, data } = this.props
    return (
      <Layout location={location}>
        <Meta site={get(data, 'site.meta')} title="About" />
        <section className="about pt-5">
          <div className="container">
            <h1>About Kent</h1>
            <img
              src={'/img/kent-picture.jpg'}
              className="img-thumbnail image-wrapper float-right kent-picture"
              alt={'Kent'}
            />
            <div className="button_group">
              {Button({
                path: 'https://www.kentchang.com/cv.pdf',
                label: 'CV',
                primary: true,
              })}
              {Button({ path: '/project/', label: 'Project', primary: true })}
              {Button({ path: '/teaching/', label: 'Teaching', primary: true })}
              {Button({
                path: 'https://twitter.com/KentKChang',
                label: '@KentKChang',
                primary: true,
              })}
              {Button({ path: '/contact/', label: 'Contact', primary: true })}
            </div>
            <h2>
              bringing together text mining, natural language processing, and
              literary and cultural studies
            </h2>
            <p>
              Kent Chang is currently an <span className="sc">MS</span>c in
              Digital Humanities student at University College London (
              <span className="sc">UCL</span>) and has been working for{' '}
              <a href="https://txtlab.org">.txtLAB@McGill</a> and Research
              Services at the British Library. His recent works incorporate
              digital humanities and data science methods into the study of
              literature and culture.{' '}
            </p>
            <p>
              {' '}
              His <span className="sc">MS</span>c thesis,{' '}
              <i>
                Literary Modeling Queer Modernity: Interpretations and
                Inferences of Anglo-American Queer Novels, 1860–1923
              </i>{' '}
              (provisional title) juxtaposes quantitative analysis derived from
              topic models and qualitative interpretations of queer novels from
              late nineteenth- to early twentieth-century. He has organized a
              study group on cultural and literary text mining (which he refers
              to as <span className="sc">CALTMIG</span>
              ), where he leads seminar discussion and Python lab sessions on a
              weekly basis, to address the lack of relevant coverage in the DH
              curriculum at <span className="sc">UCL</span>.
            </p>
            <p>
              Before starting at <span className="sc">UCL</span>, Kent has
              taught English for 6 years in Taiwan, where he also earned his{' '}
              <span className="sc">BA</span> in English Language and Literature
              from National Taiwan University, after having transferred from the
              Department of English Instruction (
              <span className="sc">TESOL</span>) at University of Taipei. For
              his <span className="sc">CEFR</span>
              -C1 classes, he taught with the reader he compiled,{' '}
              <i>Modernity Moderated</i>.
            </p>
            <p>
              Kent loves Oscar Wilde. He has the same birthday as Judy Garland
              and Terrance Rattigan, which he takes to be significant. In 2018,
              he became a fan of Amy Sherman-Palladino after watching{' '}
              <i>The Marvelous Mrs. Maisel</i>.{' '}
            </p>
            <p> Coffee addict. </p>
            <p>
              Kent tweets{' '}
              <a href="https://twitter.com/KentKChang">@KentKChang</a>. Email
              him at{' '}
              <code>
                kent
                <span className="email-domain">kentchang.com</span>
              </code>
              .{' '}
            </p>
          </div>
        </section>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
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
