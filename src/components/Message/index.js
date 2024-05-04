// Write your code here
import './index.css'
const Message = props => {
  const {isLoggin} = props
  const message = isLoggin ? "Welcome User":'Please Login'
  return <h1 className="message-heading">{message}</h1>
}
export default Message
