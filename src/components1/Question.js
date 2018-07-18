import React from 'react'
import PropTypes from 'prop-types'

const Question = ({image, text, classes}) => {
  let content = ''
  if (image) {
    content = <img src={image} alt='question' />
  } else if (text) {
    content = <div className={classes.questionText} dangerouslySetInnerHTML={{__html: text}} />
  }
  return (
    <div className={classes.question}>{content}</div>
  )
}

Question.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  classes: PropTypes.object
}

export default Question
