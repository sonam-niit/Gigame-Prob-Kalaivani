import { useState } from "react";

function ExampleComp() {

    const [user,setUser]= useState({name:"User1",age:34});
    const changeNameValue=()=>{
        setUser({
            ...user,
            name:"Sonam Soni",
        })
    }
    const changeAgeValue=()=>{
        setUser({
            ...user,
            age:78,
        })
    }
    return ( 
        <div>
            <h3>{user.name}</h3>
            <h3>{user.age}</h3>

            <button onClick={changeNameValue}>Update State</button>
            <button onClick={changeAgeValue}>Update State</button>
        </div>
     );
}

export default ExampleComp;