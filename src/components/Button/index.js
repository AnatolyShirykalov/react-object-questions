// Button.js
import React from 'react'
import PropTypes from 'prop-types'
import defaultClasses from './index.css'
import classNames from 'classnames/bind'

const Button = (props) => {
  const {disabled, value, onClick, classes, active, right, wrong} = props
  const cx = classNames.bind(classes)
  return (
    <button
      className={cx('btn', {active, right, wrong})}
      disabled={disabled}
      onClick={onClick}
      dangerouslySetInnerHTML={{__html: value}}
    />
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  classes: PropTypes.object,
  active: PropTypes.bool,
  right: PropTypes.bool,
  wrong: PropTypes.bool
}

Button.defaultProps = {
  classes: defaultClasses,
  disabled: false,
  active: false,
  right: false,
  wrong: false
}

export default Button
