import { Component } from 'react'
import Widget from './Widget'

export default class One extends Component {
  render() {
    return (
      <article>
        <Widget
          title={`Session 1`}
          bgColor={`white`}
          textColor={`black`}
          description={`Components, props, states, life cycle method, hooks`}
          author={`Sagar bhatt`}
        ></Widget>
      </article>
    )
  }
}
