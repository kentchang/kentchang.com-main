import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Button from 'components/Button'

class Teaching extends React.Component {
  render() {
    const { location, data } = this.props
    return (
      <Layout location={location}>
        <Meta site={get(data, 'site.meta')} title="Teaching" />
        <section className="teaching pt-5">
          <div className="container">
            <h1>Teaching</h1>
            <h2>Digital Humanities</h2>
            <div className="card-deck">
              <div className="card">
                <div className="card-header">
                  <h3>Cultural and literary text mining</h3>
                </div>
                <div className="card-body">
                  <div className="button_group">
                    {Button({
                      path: 'https://caltmig.kentchang.com/',
                      label: 'Website',
                      primary: true,
                    })}
                    {Button({
                      path:
                        'https://caltmig.kentchang.com/pdf/caltmig-syllabus.pdf',
                      label: 'Reading list',
                      primary: true,
                    })}
                  </div>
                  <hr />
                  <p className="card-text">
                    Technically it’s a study group, not a formal course,
                    although I run it like one. This is how I imagine a digital
                    humanities course on distant reading/cultural analytics
                    could/should be tuaght in 2018.
                  </p>

                  <h4>Reading group </h4>
                  <p className="card-text">
                    I lead seminar dicussion on assigned readings for each week
                    on a certain topic, starting with the debates surrounding
                    studying literature at scale and relevant articulations of
                    methodologies.{' '}
                  </p>

                  <h4>Lab</h4>
                  <p className="card-text">
                    Introduces relevant, essential Python language features and
                    some ways to do text mining in Python, with occasional foray
                    into natural language processing.{' '}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Date: July 2018–</small>
                </div>
              </div>
            </div>

            <h2>English</h2>

            <div className="card-deck">
              <div className="card">
                <div className="card-header">
                  <h3>Modernity Moderated</h3>
                </div>
                <div className="card-body">
                  <div className="button_group">
                    {Button({
                      path: 'http://imkent.com/apeng/',
                      label: 'Phase 1',
                      primary: true,
                    })}
                    {Button({
                      path: 'http://imkent.com/upbeat/',
                      label: 'Phase 2',
                      primary: true,
                    })}
                    {Button({
                      path: 'http://imkent.com/deh/',
                      label: 'Phase 3',
                      primary: true,
                    })}
                  </div>
                  <hr />
                  <p className="card-text">
                    {' '}
                    This is my advanced English class for my students in Taiwan,
                    who felt stuck after having passed CEFR B2 equivalent tests.
                    My focus was extensive exposure to authentic English, unlike
                    the (traditional) test-oriented approach. I compiled a
                    reader of two volumes to structure my teaching around such
                    works as Disney’s <i>Tangled</i>,{' '}
                    <i>A Charlie Brown Christimas</i>, Lin-Manuel Miranda’s{' '}
                    <i>In the Heights</i>, Oscar Wilde’s{' '}
                    <i>The Importance of Being Earnest</i>, Steven Levenson,
                    Benj Pasek, and Justin Paul’s <i>Dear Evan Hansen</i>.{' '}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Date: September 2015–September 2017
                  </small>
                </div>
              </div>
            </div>

            <div className="card-deck mt-3">
              <div className="card">
                <div className="card-header">
                  <h3>Freshman English (TA)</h3>
                </div>
                <div className="card-body">
                  <div className="button_group">
                    {Button({
                      path: 'http://imkent.com/fe/',
                      label: 'Fall 2016',
                      primary: true,
                    })}
                    {Button({
                      path: 'http://imkent.com/fe2/',
                      label: 'Spring 2017 (original)',
                      primary: true,
                    })}
                    {Button({
                      path: 'http://imkent.com/fe2-2/',
                      label: 'Spring 2017 (simplified)',
                      primary: true,
                    })}
                  </div>
                  <hr />
                  <p className="card-text">
                    {' '}
                    I served as teaching assistant to Prof. Hui-chuan Chang at
                    National Taiwan University for her FL1009–10 Freshman
                    English class. In addition to regular TA jobs, I was
                    entitled to hold weekly TA sessions. I focused more on
                    pronunciation and writing, but plugged in a few{' '}
                    <i>Modernity Moderated</i> material in there too, as long as
                    it’s related to the assigned readings. I had my students
                    listen to a few songs from <i>Hamilton</i>, for which I
                    still feel proud.{' '}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Date: September 2016–June 2017
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Teaching

export const pageQuery = graphql`
  query TeachingQuery {
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
