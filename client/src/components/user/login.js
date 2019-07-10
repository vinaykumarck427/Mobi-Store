import React from 'react'

/* packages */
import axios from 'axios'

import FormLogin from './loginForm'

class UserLogin extends React.Component {
  handleLogin = (data) => {
    axios.post('http://localhost:3005/users/login', data)
      .then(response => {
        console.log(response.data)
        if (response.data.error) {
          alert(response.data.error)
        } else {
          const token = response.data.token
          localStorage.setItem('userAuthToken', token)
          this.props.history.push('/users/account')
        }
      })
  }
  render() {
    return (
      <div>
        <FormLogin handleLogin={this.handleLogin} />
      </div>
    )
  }
}
export default UserLogin