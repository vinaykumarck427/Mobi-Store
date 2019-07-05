import React from 'react'
import axios from '../../config/axios'

class ProductPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product: []
        }
    }

    componentDidMount(){
        axios.get('/product')
        .then(response => {
            this.setState(() => ({
                product: response.data
            }))
        })
    }
    render(){
        return(
            <div>
                <ol>
                    {this.state.product.map((products) =>{
                        return <li key = {products._id}><h1>{products.productName}</h1></li>
                    })}
                </ol>
            </div>
        )
    }
}

export default ProductPage