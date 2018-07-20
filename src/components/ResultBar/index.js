import React from 'react'
import PropTypes from 'prop-types'
import defaultClasses from './index.css'

const ResultBar = (props) => {
  const {classes} = props
  return (
    <div className={classes.wrap}>
      <div className={classes.resultBar}>
        <span className={classes.right}>{props.right}</span>
        <span className={classes.wrong}>{props.wrong}</span>
        <span className={classes.rate}>{props.rate}</span>
      </div>
    </div>
  )
}

ResultBar.propTypes = {
  classes: PropTypes.object,
  right: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
  rate: PropTypes.string.isRequired
}

ResultBar.defaultProps = {
  classes: defaultClasses
}

export default ResultBar
