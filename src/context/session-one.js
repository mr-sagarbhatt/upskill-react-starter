import { createContext, Component } from 'react'

// * Context
const SessionOneContext = createContext()

const SessionOneConsumer = SessionOneContext.Consumer
// const SessionOneProvider = SessionOneContext.Provider

// * Created a class to extend its functionality
class SessionOneProvider extends Component {
  state = {
    color: 'black',
    setColor: (color) => this.setState({ color }),
  }

  render() {
    return <SessionOneContext.Provider value={{ ...this.state }}>{this.props.children}</SessionOneContext.Provider>
  }
}

export { SessionOneContext, SessionOneConsumer, SessionOneProvider }
