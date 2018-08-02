import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import _ from 'lodash'

import classes from './index.css'

import NextQuestion from '../components/NextQuestion'
const cx = classNames.bind(classes)

export class PairTest extends Component {
  static propTypes = {
    onClickDone: PropTypes.func,
    onAnswer: PropTypes.func,
    test: PropTypes.object
  }

  static defaultProps = {
    onAnswer: () => {},
    onClickDone: () => {}
  }

  state = {
    current: 0,
    value: null,
    label: null,
    values: {},
    labels: {},
    right: 0,
    wrong: 0,
    rate: 0,
    pairs: []
  }

  componentDidMount() {
    this.setState({keys: _.shuffle(Object.keys(this.props.test.labels))})
  }

  addPair({value, label}) {
    const {objects} = this.props.test
    const {right, wrong, values, labels, current} = this.state
    const question = objects[current]
    this.props.onAnswer({value, label, question})
    const success = value === label || question[value] === question[label]
    const stateDiff = {
      value: null,
      label: null,
      values: {...values, [value]: true},
      labels: {...labels, [label]: true},
      pairs: [...this.state.pairs, {value, label, success}]
    }
    let rate
    if (success) {
      rate = (right + 1) / (right + 1 + wrong)
      this.setState({...stateDiff, right: right + 1, rate})
    } else {
      rate = (right) / (right + 1 + wrong)
      this.setState({...stateDiff, wrong: wrong + 1, rate})
    }
  }

  toggleThem = (me, it, key) => () => {
    if (this.state[`${me}s`][key]) return
    if (this.state[it] !== null) {
      this.addPair({[me]: key, [it]: this.state[it]})
    } else if (this.state[me] !== null && this.state[me] !== key) {
      this.setState({[me]: key})
    } else if (this.state[me] !== null) {
      this.setState({[me]: null})
    } else {
      this.setState({[me]: key})
    }
  }

  toggleValue = key => this.toggleThem('value', 'label', key)
  toggleLabel = key => this.toggleThem('label', 'value', key)

  result(pair) {
    if (this.state.pairs.length !== this.state.keys.length) {
      return null
    }
    return pair.success
  }

  removePair = i => () => {
    const {[this.state.pairs[i].value]: ov, ...values} = this.state.values
    const {[this.state.pairs[i].label]: ol, ...labels} = this.state.labels
    this.setState({
      pairs: this.state.pairs.filter((_, I) => I !== i),
      values,
      labels
    })
  }

  next = () => {
    this.setState({
      current: this.state.current + 1,
      pairs: [],
      values: {},
      labels: {},
      label: null,
      value: null
    })
  }

  render() {
    if (this.props.test.objects.length <= this.state.current) {
      return (
        <div>
          <button onClick={this.props.onClickDone}>Ок</button>
        </div>
      )
    }

    if (!this.state.keys) {
      return <div />
    }

    const object = this.props.test.objects[this.state.current]
    const {value, values, label, labels} = this.state

    return (
      <div>
        <div style={{height: `${this.state.keys.length * 2}ex`}}>
          {this.state.pairs.map((pair, i) => (
            <div key={pair.value}>
              <span>{object[pair.value]}</span>
              <span>{'->'}</span>
              <span>{this.props.test.labels[pair.label]}</span>
              <span>{this.result(pair) === null
                ? <span className={classes.removePair} onClick={this.removePair(i)}>&times;</span>
                : `${this.result(pair)}`
              }</span>
            </div>
          ))}
        </div>
        <div className={classes.wrap}>
          <div className={cx('left', 'side')}>
            {this.state.keys.map(key => (
              <div
                key={key}
                className={cx('item', {selected: value === key, disabled: values[key]})}
                onClick={this.toggleValue(key)}
              >{object[key]}</div>
            ))}
          </div>
          <div className={cx('right', 'side')}>
            {Object.keys(this.props.test.labels).map(key => (
              <div
                key={key}
                className={cx('item', {selected: label === key, disabled: labels[key]})}
                onClick={this.toggleLabel(key)}
              >{this.props.test.labels[key]}</div>
            ))}
          </div>
        </div>
        <div>
          {this.state.keys.length === this.state.pairs.length
            ? <NextQuestion onClick={this.next} />
            : null
          }
        </div>
      </div>
    )
  }
}
