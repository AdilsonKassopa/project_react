//import { useState, useState } from 'react'
import { useEffect, useState, useRef } from 'react'
import './App.css'
import Vite from "../../../public/vite.svg"
import api from '../../services/Api'

//React Hooks:
//useEffect
//useState
//useRef

function App() {
  //const [count, setCount] = useState(0)
  const  [users,setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers(){
    const usersFromApi = await api.get("/users")
    setUsers(usersFromApi.data) 
  }

  async function createtUsers(){
     await api.post("/users",{
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
     })
    
    getUsers()
  }

  async function deleteUsers(id){
    await api.delete(`/users/${id}`)
    getUsers()
    
  }

  useEffect(() => {
    getUsers()
  }, [])
  

  return (
   
    <div className='container'>
      <form action="">
      <h1>Cadastro de Usuario</h1>
        <input placeholder='Name' type="text" ref={inputName}/>
        <input placeholder='Age' type="number" ref={inputAge} />
        <input placeholder='Email' type="email"  ref={inputEmail}/>
        <input id='button' type="button" value="Cadastrar" onClick={createtUsers} />
      </form>

      {users.map(user =>(
        <div className='card' key={user.id}>
          <div>
            <p>Nome:  <spam>{user.name}</spam></p>
            <p>Idade:  <spam>{user.age}</spam></p>
            <p>Emai:  <spam>{user.email}</spam></p>
          </div> 
          <button type="button" onClick={() => deleteUsers(user.id)}><img src={Vite} alt="" /></button>
      </div>

      ))}
      
    </div>
  )
}

export default App
