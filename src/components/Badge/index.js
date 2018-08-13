import React from 'react'
import map from 'lodash/map'
import { Link } from 'gatsby'

const Badge = ({ items, primary }) =>
  map(items, (item, i) => {
    return (
      <a href={`/blog/tag/${item}`} className={`badge badge-secondary`} key={i}>
        {`#${item}`}
      </a>
    )
  })

export default Badge
