import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [product,setProduct] = useState(first10);
    const [cart , setCart] = useState([])
    const handleAddProduct = (product) =>{
        console.log('Product Added',product)
        const newCart = [...cart , product]
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
            <ul>
                {
                    product.map(pd =>
                        <Product handleAddProduct={handleAddProduct} product={pd}></Product>
                    )
                }
            </ul>
            </div>
            <div className='cart-container'>
                {/* <h1>This is Cart</h1>
                <p>Order is : {cart.length}</p> */}
                <Cart cart ={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Shop;