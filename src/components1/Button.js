// Button.js
import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

const Button = (props) => {
  const {disabled, value, onClick, classes} = props
  const className = _.intersection(
    ['active', 'right', 'wrong'],
    _.keys(_.pickBy(props, _.identity))
  ).map(k => classes[k]).join(' ') + ' ' + classes.btn
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      dangerouslySetInnerHTML={{__html: value}}
    />
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onClick: PropTypes.function,
  classes: PropTypes.object,
  active: PropTypes.bool,
  right: PropTypes.bool,
  wrong: PropTypes.bool
}

export default Button
