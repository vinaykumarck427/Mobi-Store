import React from 'react';

class InitailForm extends React.Component{
	constructor () {
		super()
		this.state = {
			selectedFiles:{},
			price: 0,
			name: ''
		}
	}
	handleChange = (e) => {
		const value = e.target.type === 'text' ? e.target.value : e.target.value
		const name = e.target.name
		this.setState({[name]: value})
	}
	fileSelectedHandle = (e) => {
		const files = e.target.files

		this.setState({files})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		const formData ={
			name:this.state.name,
			price:this.state.price,
			files:this.state.selectedFiles
		}
		console.log(formData)
	}
	render(){
		return (
      <div>
        <h2>Product</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Enter Product Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label>Images:</label>
            <input
              type="file"
              onChange={this.fileSelectedHandle}
              encType="mulitpart/form-data"
              multiple
            />
          </div>
          <br />
          <div>
            <label>Enter Price of product</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
					<button type="submit" >Submit</button>
        </form>
      </div>
    );
	}
}
export default InitailForm