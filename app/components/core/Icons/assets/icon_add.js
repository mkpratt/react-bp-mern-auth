import React from 'react'
import PropTypes from 'prop-types'

const IconAdd = props =>
  (<object className={`inlineVector ${props.className}`}>
    <svg className="inlineVector__svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
      <g className="inlineVector__shape" fill={props.fill}>
        <path d="M11,21.0652174 C5.44113393,21.0652174 0.934782609,16.5588661 0.934782609,11 C0.934782609,5.44113393 5.44113393,0.934782609 11,0.934782609 C16.5588661,0.934782609 21.0652174,5.44113393 21.0652174,11 C21.0652174,16.5588661 16.5588661,21.0652174 11,21.0652174 Z M11,20.0652174 C16.0065813,20.0652174 20.0652174,16.0065813 20.0652174,11 C20.0652174,5.99341868 16.0065813,1.93478261 11,1.93478261 C5.99341868,1.93478261 1.93478261,5.99341868 1.93478261,11 C1.93478261,16.0065813 5.99341868,20.0652174 11,20.0652174 Z" />
        <path d="M10.5,5.7826087 L10.5,16.2173913 C10.5,16.4935337 10.7238576,16.7173913 11,16.7173913 C11.2761424,16.7173913 11.5,16.4935337 11.5,16.2173913 L11.5,5.7826087 C11.5,5.50646632 11.2761424,5.2826087 11,5.2826087 C10.7238576,5.2826087 10.5,5.50646632 10.5,5.7826087 Z" />
        <path d="M16.2173913,10.5 L5.7826087,10.5 C5.50646632,10.5 5.2826087,10.7238576 5.2826087,11 C5.2826087,11.2761424 5.50646632,11.5 5.7826087,11.5 L16.2173913,11.5 C16.4935337,11.5 16.7173913,11.2761424 16.7173913,11 C16.7173913,10.7238576 16.4935337,10.5 16.2173913,10.5 Z" />
      </g>
    </svg>
   </object>)

IconAdd.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
}

IconAdd.defaultProps = {
  className: '',
  fill: '#17CEA0',
}

export default IconAdd
