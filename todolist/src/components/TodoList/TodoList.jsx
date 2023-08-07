import { useState } from "react"
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";


export default function TodoList({filter}) {
    const [todos, setTodos] = useState([
        { id: '1', text: '장보기', status: 'active' }
        , { id: '2', text: '공부하기', status: 'active' }
    ]);

    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }

    const handleDelete = (deleted) =>{
        setTodos(todos.filter((todo)=> todo.id !== deleted.id))
    }

    const handleUpdate = (updated) => {
        setTodos(todos.map((todo)=> todo.id === updated.id ? updated : todo));
    }

    const filtered = getFilteredItem(todos,filter);

    return (
        <section>
            <ul>
                {
                    filtered.map((item) => <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />)
                }
            </ul>
            <AddTodo onAdd={handleAdd} />
        </section>
    )
}

function getFilteredItem(todos, filter){
    if(filter==='all'){
        return todos;
    }else{
        return todos.filter((todo)=> todo.status === filter);
    }
}