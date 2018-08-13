import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Button from 'components/Button'

import Carousel from 'nuka-carousel'

class Project extends React.Component {
  render() {
    const { location, data } = this.props
    const slideHeight = 442
    return (
      <Layout location={location}>
        <Meta site={get(data, 'site.meta')} title="Project" />
        <section className="project pt-5">
          <div className="container">
            <h1>Project</h1>
            <h2>UCL Coursework</h2>
            <div className="card-deck">
              <div className="card">
                <div className="card-header">
                  <h3>
                    <a href="https://mappingbroadway.kentchang.com">
                      Mapping Broadway
                    </a>
                  </h3>
                </div>
                <Carousel initialSlideHeight={slideHeight}>
                  <img src={'/img/mapping-broadway-1.png'} />
                  <img src={'/img/mapping-broadway-2.png'} />
                  <img src={'/img/mapping-broadway-3.png'} />
                </Carousel>
                <div className="card-body">
                  <h4>Broadway Theatre as a Field of Cultural Production</h4>
                  <p className="card-text">
                    Inspired by Derek Miller’s “
                    <a href="https://muse.jhu.edu/article/645395/pdf">
                      Average Broadway
                    </a>
                    ”, I tried to look at the correlation between a
                    musical/play’s setting(s) and its prestige and box office. I
                    web scrapped IBDB.com, BroadwayLeague.com, TonyAwards.com,
                    and Wikipedia, and then performed entity recognition and
                    geoencoding (all in Python) to construct a PostgreSQL
                    database which can be queried via PHP PDO. The project
                    website is an interactive Leaflet.js map.{' '}
                  </p>
                  <p className="card-text">
                    {' '}
                    For INSTG033 Server Programming and Structured Data with Dr.
                    Oliver Duke-Williams and Dr. Antonis Bikakis.
                  </p>
                  <hr />
                  <h5 className="card-title">Technology</h5>
                  <p className="card-text">
                    {' '}
                    Python 3 (<code>BeautifulSoup</code>, <code>NLTK</code>
                    ), PHP 7.3, PostgreSQL 9, Sass, jQuery, jQuery UI{' '}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Date: May 2018</small>
                </div>
              </div>
            </div>
            <div className="card-deck mt-3">
              <div className="card">
                <div className="card-header">
                  <h3>
                    <a href="https://kentchang.com/eliot/">
                      T.S. Eliot as Family Man
                    </a>
                  </h3>
                </div>
                <Carousel initialSlideHeight={slideHeight}>
                  <img src={'/img/eliot-1.png'} />
                  <img src={'/img/eliot-2.png'} />
                  <img src={'/img/eliot-3.png'} />
                </Carousel>
                <div className="card-body">
                  <h4>Discovering the other side of T.S. Eliot</h4>
                  <p className="card-text">
                    {' '}
                    “T.S. Eliot” and “family man” don’t seem to go together.
                    Indeed it sounds paradoxical. To the most of us, his name is
                    associated with true linguistic sophistication, and,
                    unfortunately, unhappy marriages. We also rarely study him
                    as a family man—we direct our energy to his esoteric and
                    elite high Modernist poetry, which, ironically, is partly
                    also because of the influential school of literary criticism
                    he started. Since his monumental “Tradition and the
                    Individual Talent,” biographical details of individual
                    authors have been rendered less relevant in literary
                    criticism. Despite the paradox, however, he should be a
                    family man to some people.{' '}
                  </p>
                  <p className="card-text">
                    {' '}
                    This digital humanities project invites you to look at
                    another side of the liteary giant. “T.S. Eliot and a Family
                    Man” is a database of letters Eliot wrote to his families.
                    In those letters, he is down-to-earth, amiable, and, like
                    everyone else, worries over petty, everyday trouble.
                  </p>
                  <p className="card-text">
                    {' '}
                    For INSTG037 XML with Dr Simon Mahony.
                  </p>
                  <hr />
                  <h5 className="card-title">Technology</h5>
                  <p className="card-text">
                    {' '}
                    XML (DTD), XSLT 2.0, HTML5 Boilerplate, Sass
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Date: May 2018</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Project

export const pageQuery = graphql`
  query ProjectQuery {
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
