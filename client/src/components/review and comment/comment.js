import React from 'react'
import axios from 'axios'

class Comment extends React.Component{
  constructor(){
    super()
    this.state = {
      comments : []
    }
  }
  componentDidMount(){
    axios.get('https://localhost:3005/comments')
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  render(){
    return(
      <div>
        <h2></h2>
      </div>
    )
  }
}
export default Comment