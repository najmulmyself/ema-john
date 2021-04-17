import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img}></img>
            </div>
            <div className='product-info'>
                <h4>{name}</h4>
                <p><small>By: {seller}</small></p>
                <p><small>${price}</small></p>
                <p>Only {stock} left in Stock - Order Soon </p>
                <button className='cart-btn' onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon className='fontA-btn' icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
        
    );
};

export default Product;