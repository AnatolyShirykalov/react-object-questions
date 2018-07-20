import React from 'react'
import PropTypes from 'prop-types'
import defaultClasses from './index.css'

const Question = ({image, text, classes, onImageLoad}) => {
  let content = ''
  if (image) {
    content = <img src={image} alt='question' onLoad={onImageLoad} />
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
  classes: PropTypes.object,
  onImageLoad: PropTypes.func.isRequired
}

Question.defaultProps = {
  classes: defaultClasses
}

export default Question
