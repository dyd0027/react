export default function Header({filters, filter,onFilterChange}){
    return(
        <header>
            <ul>
                {
                    filters.map((f,idx)=>
                        (<li key={idx}><button onClick={()=>onFilterChange(f)}>{f}</button></li>)
                    )
                }
            </ul>
        </header>
    )
}