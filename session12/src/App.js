import { useState } from 'react';
import './App.css';
import Counter from './Components/counter';
import ExampleComp from './Components/ExampleCom';
import FormDemo from './Components/form';
import UseCase1 from './Components/UseEffect/UseCase1';
import UseCase2 from './Components/UseEffect/UseCase2';
import UseCase3 from './Components/UseEffect/UseCase3';

function App() {
  // const [name,setName]= useState('Gigame');
  // const handleChange=()=>{
  //   setName('Sonam Soni')
  // }
  const [flag,setFlag]= useState(false);
  return (
    <div className="App">
      <UseCase3 />
      {/* <UseCase1 />
      <button onClick={()=>setFlag(flag?false:true)}>show component</button>
      { flag && <UseCase2 />} */}
      {/* <FormDemo /> */}
        {/* <h1>{name}</h1>
        <button onClick={handleChange}>Change Value</button>
        <Counter />
        <ExampleComp /> */}
    </div>
  );
}

export default App;
