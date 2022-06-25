import React, { Component } from 'react'

export default class ListApiData extends Component {
  render() {
    return (
      <section className="font-mono">
        {/* <h1 className="font-bold">User Posts({this.props.posts.length})</h1> */}
        <h1 className="font-bold">User Posts</h1>
        <table className="border">
          <thead className="border">
            <tr className="border">
              <th className="border p-2">Id</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Body</th>
            </tr>
          </thead>
          <tbody>
            {this.props.posts
              .filter((item, i) => i < 10)
              .map((item, i) => (
                <tr key={i} className="border">
                  <td className="border p-2">{item.id}</td>
                  <td className="border p-2">{item.title}</td>
                  <td className="border p-2">{item.body}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    )
  }
}
