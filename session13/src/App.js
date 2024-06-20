import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Dashboard from './components/dashboard';
import Products from './components/products';
import Details from './components/details';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  const inccrement=()=>{
    setCount(count+1);
  }
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='login' element={<Login />} /> 
        <Route path='register' element={<Register />} /> 
        <Route path='dashboard' element={<Dashboard mydata={count} method={inccrement}/>} /> 
        <Route path='products' element={<Products />} /> 
        <Route path='products/detail/:id' element={<Details />} /> 
      </Routes>
      
    </div>
  );
}

export default App;
