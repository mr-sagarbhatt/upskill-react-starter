import React, { Component } from 'react'

export default class FetchApi extends Component {
  state = {
    posts: [],
    loading: false,
  }
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true })
    const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
    this.setState({
      posts,
      loading: false,
    })
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <section>Loading...</section>
        ) : (
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
                {this.state.posts
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
        )}
      </>
    )
  }
}
