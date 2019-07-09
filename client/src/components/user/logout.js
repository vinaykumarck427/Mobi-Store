import React from 'react'

/* packages */
import axios from 'axios'

import { resetUser } from '../../actions/user'
import { connect } from 'react-redux'

class LogoutUser extends React.Component {
  componentWillMount() {
    console.log('component Did Mount')
    console.log(localStorage.getItem('userAuthToken'))
    axios.delete('http://cors-anywhere.herokuapp.com/http://localhost:3005/users/logout', {
      headers: {
        'x-auth': localStorage.getItem('userAuthToken')//https://cors-anywhere.herokuapp.com/
      }
    })
    // fetch(`https://localhost:3005/users/logout`, {
    //   method: 'DELETE',
    //   withCredentials: true,
    //   credentials: 'include',
    //   headers: {
    //           'x-auth': localStorage.getItem('userAuthToken'),
    //           }})
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