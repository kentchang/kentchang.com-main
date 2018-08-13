import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'

library.add(faTwitterSquare, faFacebookSquare, faEnvelope)

const Icon = ({ prefix, name, className }) => (
  <div className="icon" title={name}>
    <FontAwesomeIcon icon={[prefix, name]} className={className} />
  </div>
)

export default Icon
