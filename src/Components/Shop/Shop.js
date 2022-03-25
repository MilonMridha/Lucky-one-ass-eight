import React, { useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useState(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))


    },[])
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                    <div className='row row-cols-1 row-cols-lg-3'>
                        {
                            products.map(product => <Product
                            product={product}
                            key={product.id}
                            ></Product>)
                        }
                    </div>

                </div>
                <div className='col-md-3'>
                    <h4>Cart Summary</h4>
                </div>
            </div>
            

        </div>
    );
};

export default Shop;