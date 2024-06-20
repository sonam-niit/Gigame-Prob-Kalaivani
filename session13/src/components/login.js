import { useNavigate } from "react-router-dom";

function Login(props) {

    const navigate= useNavigate();
    const handleClick=()=>{
        alert('Logged In successfully');
        navigate('/dashboard');
    }
    return ( 
        <div>
            <h1>Login Component</h1>
            <button onClick={handleClick}>Login Me</button>
        </div>
     );
}

export default Login;