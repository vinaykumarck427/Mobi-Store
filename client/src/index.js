import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import AddPage from './components/AddPage'
import ProductShow from './components/productAdmin/productShow'
import Review from './components/review and comment/review'
import Comment from './components/review and comment/comment'


class App extends React.Component{
    render(){
        return(
        <div>
            <BrowserRouter>
            <div>
                <h1>Welcome to the App</h1>
                <Link to ="/products"><h2>Add</h2></Link>
                <Link to="/products/show"><h2>Show(added by postman)</h2></Link>
                <Link to="/reviews"><h2>Reviews</h2></Link>
                <Link to="/comments"><h2>Comment</h2></Link>
                <Switch>
                    <Route path="/products" component={AddPage} exact={true}/>
                    <Route exact path="/products/show" component={ProductShow} />
                    <Route exact path="/reviews" component={Review} />
                    <Route exact path="/comments" component={Comment} />

                </Switch>
            </div>
            </BrowserRouter>        
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))



