import React from 'react'
import PropTypes from 'prop-types'

const IconIntensity = props =>
  (<object className={`inlineVector ${props.className}`}>
    <svg width="100px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <g id="Landing-page-(Dec-2017)" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-961.000000, -1899.000000)">
        <rect id="Rectangle-8" stroke="#00CC99" strokeWidth="2" x="962" y="1900" width="25" height="25" rx="8"></rect>
        <text x="970.446289" y="1917" id="3" fill="#00CC99">3</text>
        <circle id="Oval" fill="#00CC99" cx="975" cy="1939" r="8"></circle>
        <path d="M952.998879,1939.5 L1034,1939.5" id="Line-4" stroke="#00CC99" strokeWidth="2"></path>
      </g>
    </svg>
   </object>)

IconIntensity.propTypes = {
  className: PropTypes.string,
}

IconIntensity.defaultProps = {
  className: '',
}

export default IconIntensity
