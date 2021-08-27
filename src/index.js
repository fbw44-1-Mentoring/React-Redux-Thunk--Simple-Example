
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"

const initialState= {
    users:[],
    counter:0
}

const Reducer = (state=initialState, action)=>{
    switch(action.type){
        case "increment":
            return {...state,counter: state.counter+1 }
        case "decrement":
            return {...state , counter: state.counter-1}
        case "fetchusers":  
            return {...state, users:action.payload}
        default: 
        return state
    }
}


const ReduxStore = createStore(Reducer,applyMiddleware(thunk))

reactDOM.render( <Provider store={ReduxStore}><App/> </Provider>  ,document.getElementById("root"))