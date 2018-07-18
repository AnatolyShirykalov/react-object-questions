import React from 'react'
import PropTypes from 'prop-types'

const NextQuestionButton = props => {
  return (
    <button
      onClick={props.onClick}
      className={props.classes.nextQuestion}
      disabled={props.disabled}
    >
      {props.text || 'Следующий вопрос'}
    </button>
  )
}

NextQuestionButton.propTypes = {
  onClick: PropTypes.function,
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  text: PropTypes.string
}

export default NextQuestionButton
