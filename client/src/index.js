import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
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
=======

/* packages */
import axios from 'axios';
import { Provider } from 'react-redux'

/* redux */
import {setUser} from './actions/user'
import configureStore from './store/storeConfige'

/* components */
import App from './components/App'

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})
let xauth = localStorage.getItem('userAuthToken')
const url = 'http://localhost:3005/users/account'
if (localStorage.getItem('userAuthToken')) {
    axios.get(url, {
        headers: {
            'x-auth': xauth
        }
    })//http://cors-anywhere.herokuapp.com/

        .then(response => {
            console.log(response)
            store.dispatch(setUser(response.data))
        })
        .catch (err => {
            console.log(err)
        })
    // let user;
    // const xhr = new XMLHttpRequest()
    // xhr.open('GET', url)
    // xhr.setRequestHeader('x-auth',xauth) 
    // xhr.send()
    // xhr.onload = function () {
    //     user = JSON.parse(xhr.responseText)
    //     console.log(user)
    //     store.dispatch(setUser(user))
    // }
>>>>>>> e815100108ce8323c580bfda218c5069cceb613a
}

const provider = (
    <Provider store={store}>
        <App />
        {/* <MyComponent /> */}
    </Provider>
)

ReactDOM.render(provider, document.getElementById('root'))



