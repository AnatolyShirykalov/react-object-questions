import React from 'react'
import PropTypes from 'prop-types'

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
  right: PropTypes.number,
  wrong: PropTypes.number,
  rate: PropTypes.number
}

export default ResultBar
