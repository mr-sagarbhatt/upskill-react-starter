import React, { Component } from 'react'
import WithLoading from './HOC/WithLoading'
import ListApiData from './ListApiData'

const ListWithLoading = WithLoading(ListApiData)

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
    return <ListWithLoading isLoading={this.state.loading} posts={this.state.posts} />
  }
}
