import React from 'react'
import PropTypes from 'prop-types'

const IconNumber = props => (
  <div className={`inlineIcon icon-number ${props.className}`} style={{ width: props.value.toString().length > 2 ? `${props.value.toString().length}0px` : 30 }}>
    <span className="icon-number__value">{props.value}</span>
  </div>
)

IconNumber.defaultProps = {
  className: '',
  value: 0,
}

IconNumber.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
}

export default IconNumber
