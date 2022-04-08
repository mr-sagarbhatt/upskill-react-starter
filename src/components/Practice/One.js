import { Component } from 'react'
import Widget from './Widget'
import ColorBox from './ColorBox'
import { SessionOneContext } from '../../context/session-one'
export default class One extends Component {
  static contextType = SessionOneContext
  render() {
    const { color, setColor } = this.context
    return (
      <article>
        <section className="flex justify-end gap-2">
          <ColorBox color="black" setColor={setColor} />
          <ColorBox color="blue" setColor={setColor} />
          <ColorBox color="orange" setColor={setColor} />
        </section>
        <Widget
          title={`Session 1`}
          bgColor={`white`}
          textColor={color}
          description={`Components, props, states, life cycle method, hooks`}
          author={`Sagar bhatt`}
        ></Widget>
      </article>
    )
  }
}
