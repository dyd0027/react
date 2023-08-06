import {BsFillTrashFill} from 'react-icons/bs';

export default function Todo(prov){
    const handleChange = (e) => {
        const status = e.target.checked ? "completed" : "active";
        prov.onUpdate({...prov.todo, status:status});
    }

    const handleDelete = (e) => {
        prov.onDelete(prov.todo);
    }

    return(
        <li>
            <input 
                type="checkbox" 
                id="checkbox" 
                checked={prov.todo.status==='completed'}
                onChange={handleChange}/>
            <label htmlFor="checkbox">{prov.todo.text}</label>
            <button onClick={handleDelete}><BsFillTrashFill/></button>
        </li>
    )
}