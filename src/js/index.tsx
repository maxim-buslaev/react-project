import * as React from "react"
import * as ReactDOM from "react-dom"
import { Hello } from "./components/hello"
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'react-router-redux'
// import { store, history } from './store'
// import App from './components/app'

ReactDOM.render(
    //<Provider {...{ store }}>
      //  <ConnectedRouter {...{ history }}>
    <Hello compiler="TypeScript" framework="React" />
        //</ConnectedRouter>
    //</Provider>
   , document.getElementById('root')
)