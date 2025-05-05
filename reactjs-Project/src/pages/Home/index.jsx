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
    try {
      await api.post("/users", {
        Name: inputName.current.value,
        Age: Number(inputAge.current.value),
        Email: inputEmail.current.value,
      });
      alert("Usuário cadastrado com sucesso!");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert("Erro: " + err.response.data.message);
      } else {
        alert("Erro inesperado ao cadastrar usuário.");
        console.error(err);
      }
    }
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
            <p>Nome:  <spam>{user.Name}</spam></p>
            <p>Idade:  <spam>{user.Age}</spam></p>
            <p>Emai:  <spam>{user.Email}</spam></p>
          </div> 
          <button type="button" onClick={() => deleteUsers(user.id)}><img src={Vite} alt="" /></button>
      </div>

      ))}
      
    </div>
  )
}

export default App
