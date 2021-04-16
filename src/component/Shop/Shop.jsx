import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [product,setProduct] = useState(first10)
    return (
        <div className='shop-container'>
            <div className='product-container'>
            <ul>
                {
                    product.map(pd =>
                        <Product product={pd}></Product>
                    )
                }
            </ul>
            </div>
            <div className='cart-container'>
                <h1></h1>
            </div>
        </div>
        
    );
};

export default Shop;