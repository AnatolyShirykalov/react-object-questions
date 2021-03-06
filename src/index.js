import React, {Component} from 'react'
import PropTypes from 'prop-types'

import ResultBar from './components/ResultBar'
import NextQuestion from './components/NextQuestion/'
import VisibleQuestion from './components/VisibleQuestion/'

import {ObjectTest} from './core'

class Test extends Component {
  static propTypes = {
    test: PropTypes.object,
    startTest: PropTypes.func,
    onNextQuestion: PropTypes.func,
    onShowQuestion: PropTypes.func,
    onAnswer: PropTypes.func,
    nextQuestionLabel: PropTypes.string,
    newTestLabel: PropTypes.string
  }
  static defaultProps = {
    test: {state: 'pending'},
    startTest: () => {},
    onNextQuestion: () => {},
    onShowQuestion: () => {},
    onAnswer: () => {},
    newTestLabel: 'New test'
  }
  state = {
    btnDisabled: true,
    questions: [],
    right: 0,
    wrong: 0
  };

  initMe(test) {
    if (test.state === 'pending') return this.setState({pending: true})
    const data = test.data
    if (!data) return this.setState({error: true})
    if (data !== this.props.test) this.initNewTest(data)
  }
  componentWillReceiveProps({test}) {
    this.initMe(test)
  }
  componentDidMount() {
    this.initMe(this.props.test)
    this.props.startTest()
  }

  initNewTest(test = this.props.test.data) {
    const questions = ObjectTest(test)
    this.setState({questions, questionId: 0, right: 0, wrong: 0, pending: false, error: false})
  }
  nextQuestion = () => {
    this.props.onNextQuestion(this.state.questionId)
    this.setState({questionId: this.state.questionId + 1})
  }
  answer = (answer) => {
    const questions = this.state.questions.map(q => {
      if (q.id !== this.state.questionId) return {...q}
      if (q.answers.find(a => a.value === answer).right) {
        this.props.onAnswer({answer, right: true})
        this.setState({right: this.state.right + 1})
      } else {
        this.props.onAnswer({answer, right: false})
        this.setState({wrong: this.state.wrong + 1})
      }
      return {...q, answer}
    })
    this.setState({questions})
  }

  btnDisabled() {
    const hasNoQuestion = !this.state.questions.find(q => !q.answer)
    const notAnswered = !this.state.questions.find(q => {
      return q.id === this.state.questionId && q.answer
    })
    return notAnswered || hasNoQuestion
  }

  resultBarProps () {
    const {right, wrong} = this.state
    const total = right + wrong
    const rate = (total === 0 ? 0 : right / total).toFixed(2)
    return {right, wrong, rate}
  }
  render() {
    if (this.state.error) return <div>Нет такого теста</div>
    if (!this.state.questions) return <div>Loading</div>
    if (typeof (this.state.questionId) !== 'number') return <div>Loading</div>
    let nextBtn = (
      <NextQuestion
        onClick={this.nextQuestion}
        disabled={this.btnDisabled()}
        text={this.props.nextQuestionLabel}
      />
    )
    if (this.state.right + this.state.wrong === this.state.questions.length) {
      nextBtn = (
        <NextQuestion
          onClick={() => this.initNewTest()}
          text={this.props.newTestLabel}
        />
      )
    }
    const obj = this.state.questions.find(q => q.id === this.state.questionId)
    if (!obj) return <div>Нет теста</div>
    const question = {...obj, answers: undefined}
    const answers = obj.answers.map(a => {
      const active = a.value === question.answer
      return {...a, active}
    })
    const disabled = !!obj.answer

    return (
      <div>
        <VisibleQuestion
          onShowQuestion={this.props.onShowQuestion}
          question={question}
          answers={answers}
          disabled={disabled}
          onClick={this.answer}
        />
        {nextBtn}
        <ResultBar {...this.resultBarProps()} />
      </div>
    )
  }
}

export {PairTest} from './PairTest'

export default Test
