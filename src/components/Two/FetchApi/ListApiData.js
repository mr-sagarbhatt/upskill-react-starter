import React, { Component } from 'react'

export default class ListApiData extends Component {
  render() {
    return (
      <section>
        <h1>User Posts</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.props.posts
              .filter((item, i) => i < 10)
              .map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    )
  }
}
