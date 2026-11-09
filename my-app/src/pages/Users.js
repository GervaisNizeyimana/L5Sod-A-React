import { useState,useEffect } from "react";
import axios from "axios"

function Users(){
    const[users,setUsers] = useState([])
    const [error,setError]= useState("")
    const[isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setUsers(response.data)
            setIsLoading(false)

        })
        .catch(err=>{
            setError(err.message)
            setIsLoading(false)
        })

    },[])

    return<div>

        {isLoading&&<h3>...Loading...</h3>}
        {error&&<h3 style={{color:"red"}}>Error:{error}</h3>}
        {!isLoading && !error &&<table border={{border:1}} style={{width:400,marginLeft:100,marginTop:30}}>
        <thead>
          <tr>
            <th colSpan={4}>User information</th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
            
        </thead>
        <tbody>
            {
                users.map(user=><tr id={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>

                </tr>)
            }
        </tbody>
        <tfoot></tfoot>
       </table>}
       

    </div>
}
export default Users