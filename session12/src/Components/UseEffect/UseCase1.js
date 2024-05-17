import { useEffect, useState } from "react";

function UseCase1() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");
    useEffect(()=>{
        console.log("Component Mounted");
    })
    return ( 
        <div>
            <h3>Use Case1: {count} {name}</h3>
            <button onClick={()=>setCount(count+1)}>+</button>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
        </div>
     );
}

export default UseCase1;