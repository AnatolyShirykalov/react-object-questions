import React, { Component } from 'react'
import Test from 'react-object-questions'

const test = {
  title: 'Test Title',
  questionFieldData: [
    {name: 'name', type: 'text', answerField: 'capital'}
  ],
  objects: [
    {name: 'Russia', capital: 'Moscow'},
    {name: 'Germany', capital: 'Berlin'},
    {name: 'Englang', capital: 'London'},
    {name: 'France', capital: 'Paris'}
  ]
}

export default class App extends Component {
  render () {
    return (
      <div>
        <Test
          test={{data: test}}
          startTest={()=>{}}
        />
      </div>
    )
  }
}
