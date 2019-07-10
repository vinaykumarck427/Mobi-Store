import React from 'react'
import axios from 'axios'

import FormRegister from './registerForm'

class UserRegistration extends React.Component {
  handleRegister = (data) => {
    console.log(data)
    axios.post('http://localhost:3005/users/register', data)
      .then(response => {
        if (response.data.errors) {
          alert(response.data.message)
        } else {
          this.props.history.push('/users/login')
        }
      })
  }
  render() {
    return (
      <div className="row">
        <FormRegister handleRegister={this.handleRegister} />
      </div>
    )
  }
}

export default UserRegistration