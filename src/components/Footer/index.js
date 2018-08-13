import { Link } from 'gatsby'
import React from 'react'
import Icon from 'components/Icon'

const Footer = ({ location, author, title }) => (
  <div className={location.pathname === '/' ? 'footer footer-home' : 'footer'}>
    <div className="container">
      <div className="row">
        <div className="col-sm-9 p-3">
          Begat by
          <Link to="/about/">
            {' '}
            <strong>Kent</strong>{' '}
          </Link>
          with Gatsby and Gatstrap. Theme Black Maisel (Aug 2018–).
        </div>
        <div className="col-sm-3 text-right p-3">
          <a href="https://twitter.com/KentKChang">
            <Icon prefix="fab" name="twitter-square" className="twitter" />
          </a>
          <a href="https://www.facebook.com/kentkchang">
            <Icon prefix="fab" name="facebook-square" className="facebook" />
          </a>
          <a href="https://kentchang.com/contact/">
            <Icon prefix="fas" name="envelope" className="envelope" />
          </a>
          <a
            rel={'license'}
            href={'http://creativecommons.org/licenses/by-nc-sa/4.0/'}
          >
            <img
              alt={'Creative Commons License'}
              src={'https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png'}
            />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
