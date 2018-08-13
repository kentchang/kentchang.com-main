import React from 'react'
import { Link } from 'gatsby'

const Button = ({ path, label, primary }) => (
  // <Link to={path}>
  //   <span
  //     className={`btn btn-outline-info`}
  //   >
  //     {label}
  //   </span>
  // </Link>
  <a className={`btn btn-outline-info`} href={path} role="button">
    {label}
  </a>
)

export default Button
