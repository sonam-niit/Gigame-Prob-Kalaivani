import { useState } from "react";

function FormDemo() {
    const [user, setUser] = useState({ name: '', email: '', country: '' });
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(user.name+" "+user.email+" "+user.country);
        console.log(user);
    }
    return (
        <div >
            <h3>Welcome</h3>
            {/* <h4>Name: {user.name} Email: {user.email} Country:{user.country}</h4> */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name"
                    onChange={(e) => setUser({ ...user, name: e.target.value })} />
                <input type="email" placeholder="Enter Email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <input type="text" placeholder="Enter Country"
                    onChange={(e) => setUser({ ...user, country: e.target.value })} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default FormDemo;