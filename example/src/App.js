import React, { Component } from 'react'
import Test, {PairTest} from 'react-object-questions'

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

const pairTest = {
  title: 'Языки',
  labelType: 'text',
  valueType: 'text',
  labels: {ru: 'Русский', en: 'Английский', fr: 'Французский', de: 'Немецкий', it: 'Итальянский', es: 'Испанский'},
  objects: [
    {ru: 'да', en: 'yes', fr: 'oui', de: 'ja', it: 'sì', es: 'sí'},
    {ru: 'да', en: 'yes', fr: 'oui', de: 'ja', it: 'sì', es: 'sí'}
  ]
}

export default class App extends Component {
  render () {
    return (
      <div>
      <div>
        <Test
          test={{data: test}}
          startTest={()=>{}}
        />
      </div>
      <div>
      </div>
        <PairTest test={pairTest} />
      </div>
    )
  }
}
