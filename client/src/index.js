import React from 'react'
import ReactDOM from 'react-dom'

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
const url = 'http://cors-anywhere.herokuapp.com/http://localhost:3005/users/account'
if (localStorage.getItem('userAuthToken')) {
    axios.get(url, {
        headers: {
            'x-auth': xauth
        }
    })//http://cors-anywhere.herokuapp.com/

        .then(response => {
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
}

const provider = (
    <Provider store={store}>
        <App />
        {/* <MyComponent /> */}
    </Provider>
)

ReactDOM.render(provider, document.getElementById('root'))



