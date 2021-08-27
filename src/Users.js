import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const fetchUsers=()=>{
    return (dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(result=> dispatch({type:"fetchusers", payload:result }))
    }
}

export default function Users() {

    const users = useSelector(state=>state.users)
    const dispatch = useDispatch()

    //10s
   /*  const fetchallusers=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(result=> dispatch({type:"fetchusers", payload:result }))
    } */
    return (
        <div>
            <h2>here we have all users</h2>
            <button onClick= {
               /*  fetchallusers */
          ()=>dispatch(fetchUsers()) 
             
     /*      ()=>dispatch((dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(result=> dispatch({type:"fetchusers", payload:result }))
    })  */  
      }>fetch users</button>
            <ul>
                {users.map(user=>{
                    return (
                        <li key={user.id}> {user.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}
