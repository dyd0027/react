import { useState } from "react"

export default function Counter(){
    const [num,setNum] = useState(0);
    return(
        <div className="counter">
            <span className="number">{num}</span>
            <button className="button" onClick={()=>{
                setNum(num+1);
                setNum((prev)=>prev+1);
                setNum(num+1);
                setNum((prev)=>prev+1);
                setNum((prev)=>prev+1);
                setNum((prev)=>prev+1);
                setNum(num+1);
                setNum((prev)=>prev+1);
            }}>Add+</button>
        </div>
    )
}