import React from 'react'

class FormRegister extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }
  handleChange = (e) => {
    const value = e.target.type === 'text' ? e.target.value : e.target.value
    const name = e.target.name
    this.setState(() => ({
      [name]: value
    }))
  }
  handleSubmit = (e) => {

    e.preventDefault()
    const formData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    this.props.handleRegister(formData)
  }
  render() {
    return (
      <div>
        <h2>User Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label><br />
          <input type='text' value={this.state.name} onChange={this.handleName} /><br />

          <label>Email</label><br />
          <input type='text' value={this.state.email} onChange={this.handleEmail} /><br />

          <label>Password</label><br />
          <input type='password' value={this.state.Password} onChange={this.handleChange} /><br />

          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
export default FormRegister