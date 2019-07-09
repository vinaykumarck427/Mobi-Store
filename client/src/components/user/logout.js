import React from 'react'

/* packages */
import axios from 'axios'

import { resetUser } from '../../actions/user'
import { connect } from 'react-redux'

class LogoutUser extends React.Component {
  componentDidMount() {
    axios.delete('http://localhost:3005/users/logout', {
      headers: {
        'x-auth': localStorage.getItem('userAuthToken')//https://cors-anywhere.herokuapp.com/
      }
    })
      .then(response => {
        localStorage.removeItem('userAuthToken')
        this.props.dispatch(resetUser())
        this.props.history.push('/users/login')
      })
      .catch(er => {
        console.log(er)
      })
  }
  render() {
    return (
      <div>
        <h3>Log out....</h3>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(LogoutUser)