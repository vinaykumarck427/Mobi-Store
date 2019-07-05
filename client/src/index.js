import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Steps from './components/stepZilla'

class App extends React.Component{
    render(){
        return(
        <div>
            <BrowserRouter>
            <div>
                <h1>Welcome to the App</h1>
                <Link to ="/product">Add Products</Link>
                <Route path="/product" component={Steps} />
            </div>
            </BrowserRouter>        
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))



