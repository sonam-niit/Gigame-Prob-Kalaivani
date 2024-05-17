import { useEffect, useState } from "react";

function UseCase3() {
    const [count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        console.log(count);
    },[count])
    //execute when the state of count updates
    return (
        <div>
            <h3>Count {count}</h3>
            <button onClick={handleIncrement}>+</button>
        </div>
      );
}

export default UseCase3;