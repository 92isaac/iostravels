import React, { useContext } from 'react'
import { AppContext } from '../App'

const Login = () => {
    const {data, setData} = useContext(AppContext)
  return (
    <div>
         <form action="">
            <input type="text" placeholder='Name' value={data.name}/>


            <input type="email" placeholder='email' value={data.email}/>


            <input type="password" value={data.pwd}/>


            <button>Log in</button>
        </form>
    </div>
  )
}

export default Login