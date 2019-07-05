import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link,Switch} from 'react-render-dom'

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome to the App</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

