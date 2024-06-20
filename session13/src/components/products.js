import { Link } from 'react-router-dom';
import data from './products.json';
function Products() {
    return ( 
        <div>
            <h1>Products List</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th><th>Category</th><th>Price</th><th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(product=>(
                            <tr key={product.id}>
                                <td><Link to={`detail/${product.id}`}>{product.name}</Link></td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.rating}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default Products;