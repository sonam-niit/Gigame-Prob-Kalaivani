import { useEffect } from "react";

function UseCase2() {

    //This will execute the useEffect hook only once when the component mounts
    useEffect(()=>{
        console.log('Mounted');
        return (()=>console.log('demounted'))
    },[])
    return ( 
        <div>
            <h2>Use Case1</h2>
        </div>
     );
}

export default UseCase2;