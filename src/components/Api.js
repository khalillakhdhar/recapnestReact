import React, {useEffect,useState} from 'react'
 import axios from 'axios';

export default function Api() {
    // liste des todos
    
    const [todos, setTodos] = useState([]);
    // useEffect pour lire un api axios https://jsonplaceholder.typicode.com/todos
     useEffect(() => {    
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            console.log(res);
            setTodos(res.data);
        })
        .catch(err => {
            console.log(err);
        })
     }, [])
     
  return (
    <div>
         
      
        <h1>Liste des todos</h1>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}
