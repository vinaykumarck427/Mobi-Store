import React from 'react'

/* packages */
import axios from 'axios'

import { connect } from 'react-redux'
import { setUser } from '../../actions/user'

class Account extends React.Component {
  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/http://localhost:3005/users/account', {
      headers: {
        'x-auth': localStorage.getItem('userAuthToken')
      }
    })
      .then(response => {
        const user = response.data
        this.props.dispatch(setUser(user))
        this.props.history.push('/products')
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(Account)