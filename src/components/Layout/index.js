import React from 'react'
import emergence from 'emergence.js'

import Navi from 'components/Navi'
import Footer from 'components/Footer'
import { siteMetadata } from '../../../gatsby-config'

import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
    MathJax.Hub.Queue(['Typeset', MathJax.Hub])
    MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        processEscapes: true,
      },
    })
  }

  componentDidUpdate() {
    emergence.init()
    MathJax.Hub.Queue(['Typeset', MathJax.Hub])
    MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        processEscapes: true,
      },
    })
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Navi title={siteMetadata.title} {...this.props} />
        {children}
        <Footer
          title={siteMetadata.title}
          author={siteMetadata.author}
          {...this.props}
        />
      </div>
    )
  }
}

export default Layout
