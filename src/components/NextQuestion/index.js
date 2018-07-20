import React from 'react'
import PropTypes from 'prop-types'
import defaultClasses from './index.css'

const NextQuestionButton = props => {
  return (
    <button
      onClick={props.onClick}
      className={props.classes.nextQuestion}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  )
}

NextQuestionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  text: PropTypes.string
}

NextQuestionButton.defaultProps = {
  classes: defaultClasses,
  disabled: false,
  text: 'Next Question'
}

export default NextQuestionButton
