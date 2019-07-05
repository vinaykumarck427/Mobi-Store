import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Steps from './components/stepZilla'
import ProductShow from './components/productAdmin/productShow'

class App extends React.Component{
    render(){
        return(
        <div>
            <BrowserRouter>
            <div>
                <h1>Welcome to the App</h1>
                <Link to ="/products"><h2>Add Product</h2></Link>
                <Link to="products/show"><h2>Show Product</h2></Link>
                <Switch>
                    <Route path="/products" component={Steps} exact={true}/>
                    <Route path="/products/show" component={ProductShow} />
                </Switch>
            </div>
            </BrowserRouter>        
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))



