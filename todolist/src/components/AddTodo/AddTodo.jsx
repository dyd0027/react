import { useState } from "react"
import { v4 as uuid } from "uuid";
export default function AddTodo(prov){
    const [text,setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length===0) return;
        prov.onAdd({id:uuid(), text:text, status:"active"});
        setText('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="addTodo" value={text} onChange={handleChange}/>
            <button>add</button>
        </form>
    )
}