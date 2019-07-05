import React from 'react'
// import axios from '../../config/axios'

class ProductForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            product: {
                productName: "New"
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        console.log(e.target.value)
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>
                        ProductName
                        <input type = "text" value={this.state.product.productName} onChange = {this.handleChange} name = "productName" />
                    </label><br />
                    <label>
                        Image
                        <input>
                        </input>
                    </label><br/>
                    <label>
                        Product Price
                        <input>
                        </input>
                    </label><br />
                    <label>
                        
                    </label>
                </form>
            </div>            
        )
    }
}

export default ProductForm