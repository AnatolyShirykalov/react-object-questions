# React Object Questions

> quiz engine

<!--[![NPM](https://img.shields.io/npm/v/questions.svg)](https://www.npmjs.com/package/questions) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)-->

## Install

```bash
yarn add git://github.com/AnatolyShirykalov/react-object-questions

```

## Usage

```jsx
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
```

## License

MIT © [AnatolyShirykalov](https://github.com/AnatolyShirykalov)
