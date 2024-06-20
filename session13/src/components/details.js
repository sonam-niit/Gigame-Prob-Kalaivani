import { useParams } from "react-router-dom";
import products from './products.json';
import { useEffect, useState } from "react";

function Details() {
    // const param= useParams();
    // const id= param.id;
    const {id}=useParams();
    const [product,setProduct]=useState({});
    useEffect(()=>{
        setProduct(products.find(item=>item.id==id))
    },[])
    return ( 
        <div>
            <h3>Details Component: {product.name}</h3>
            <h3>Category: {product.category}</h3>
            <h3>Rating: {product.rating}</h3>
        </div>
     );
}

export default Details;