import React from 'react'
import PropTypes from 'prop-types'

// import './inline-icons.sass'
import * as IconSet from './assets'

/**
 *
 * SVG Icon generator
 * Keep naming convention of svg icons to icon_icontype
 * @property {object} props
 * @property {string} props.className - (optional) - Icon classnames for styling modifiers. Please see inline-icons.sass for reference
 * @property {string} props.fill - (optional) -  Override fill color in #HEX
 * @property {string} props.image - (optional) -  Override for the image (to be removed)
 * @property {string} props.type - Icon type
 *
 * @render react
 * @name Icon
 * @example
 * <Icon type="mail" />
 */
const Icon = props => {
  const IconComponent = IconSet[`icon_${props.type}`] || null // eslint-disable-line import/namespace

  return <IconComponent {...props} />
}

Icon.propTypes = {
  /* eslint-disable react/no-unused-prop-types, react/require-default-props */
  className: PropTypes.string,
  fill: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string.isRequired,
  /* eslint-enable react/no-unused-prop-types, react/require-default-props */
}

export default Icon
