import defaultClasses from './index.css'
import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'

const Answers = ({answers, disabled, onClick, classes}) => {
  return (
    <div className={classes && classes.answers}>
      { answers.map((answer) => {
        return (
          <Button
            {...answer}
            key={answer.id}
            right={disabled && answer.right}
            wrong={disabled && answer.wrong}
            disabled={disabled}
            onClick={() => onClick(answer.value)}
          />)
      })}
    </div>
  )
}

Answers.propTypes = {
  answers: PropTypes.array.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object
}

Answers.defaultProps = {
  classes: defaultClasses
}

export default Answers
