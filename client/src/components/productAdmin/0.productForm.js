import React from 'react'
// import axios from '../../config/axios'

class ProductForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            productName: '',
            image: '',
            productPrice: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        e.persist()
        console.log(this.props.onHandle)
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>
                        ProductName <br />
                        <input type = "text" value={this.state.productName} onChange = {this.handleChange} name = "productName" />
                    </label><br />
                    <label>
                        Image <br />
                        <button value={this.state.image} onClick = {this.handleChange} name = "image">Upload</button>                     
                    </label><br/>
                    <label>
                        Product Price <br />
                        <input type = "number" value={this.state.productPrice} onChange = {this.handleChange} name = "productPrice"/>
                    </label><br />
                </form>
            </div>            
        )
    }
}

export default ProductForm