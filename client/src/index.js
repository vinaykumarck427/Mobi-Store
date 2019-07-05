import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import ProductPage from './components/productAdmin/0.product'

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <h1>Welcome to the App</h1>
                <Link to ="/product">List Products</Link>
                <Route path="/product" component={ProductPage} exact={true}/>
            </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

