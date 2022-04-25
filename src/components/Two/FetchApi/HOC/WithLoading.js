import React, { Component } from 'react'

const WithLoading = (WrappedComponent) => {
  return class WithLoadingComponent extends Component {
    render() {
      if (!this.props.isLoading) return <WrappedComponent {...this.props} />
      return <section>Loading...</section>
    }
  }
}

export default WithLoading
