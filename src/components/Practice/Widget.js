import { Component } from 'react'

export default class Widget extends Component {
  render() {
    return (
      <section className="flex flex-wrap gap-4 m-4">
        <div
          className="flex flex-col w-11/12 border-2 rounded-md md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 3xl:w-1/6"
          style={{ backgroundColor: this.props.bgColor, color: this.props.textColor }}
        >
          <div className="flex justify-between p-2 font-bold border-b-2">
            <div className="capitalize">{this.props.title}</div>
          </div>
          <div className="p-2">{this.props.description}</div>
          <div className="flex justify-end p-2 italic border-t-2">- {this.props.author}</div>
        </div>
      </section>
    )
  }
}
