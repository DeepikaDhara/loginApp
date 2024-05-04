// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'
class Home extends Component {
  state = {
    isLoggin: false,
  }
  onClickButton = () => {
    this.setState(prevState => ({
      isLoggin: !prevState.isLoggin,
    }))
  }
  render() {
    const {isLoggin} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <Message isLoggin={isLoggin} />
          {isLoggin ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
