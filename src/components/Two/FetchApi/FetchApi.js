import React, { Component } from 'react'
import WithLoading from './HOC/WithLoading'
import ListApiData from './ListApiData'

const ListWithLoading = WithLoading(ListApiData)

export default class FetchApi extends Component {
  state = {
    posts: [],
    loading: false,
    error: '',
  }
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true })
    try {
      const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
      this.setState({
        posts,
        loading: false,
      })
    } catch (e) {
      console.log(`Fetch API Error ==>`, e)
      this.setState({
        loading: false,
        error: 'Something went wrong, Please try again later..!',
      })
    }
  }

  render() {
    if (this.state.error.length > 0) return <section>{this.state.error}</section>

    return <ListWithLoading isLoading={this.state.loading} posts={this.state.posts} />
  }
}
