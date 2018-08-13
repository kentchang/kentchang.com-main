import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav
        className={
          location.pathname == '/'
            ? 'navbar navbar-expand navbar-dark flex-column flex-md-row bg-transparent text-white'
            : 'navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary'
        }
      >
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname == '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/about/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/about/" className="nav-link">
                  About
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/blog/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/blog/" className="nav-link">
                  Blog
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/project/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/project/" className="nav-link">
                  Project
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/teaching/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/teaching/" className="nav-link">
                  Teaching
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/contact/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/contact/" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default Navi
