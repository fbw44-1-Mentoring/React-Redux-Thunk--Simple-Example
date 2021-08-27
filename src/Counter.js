import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter() {


    const counter = useSelector(state=>state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Counter value: {counter}</h2>
            <button onClick= {()=>dispatch({type:"increment"})}>increment</button>
            <button onClick= {()=>dispatch({type:"decrement"})}>decrement</button> 
        </div>
    )
}
