function Dashboard({mydata,method}) {
    return ( 
        <div>
            <h2>Dashboard Component: {mydata}</h2>
            <button onClick={()=>method()}>+</button>
        </div>
     );
}

export default Dashboard;