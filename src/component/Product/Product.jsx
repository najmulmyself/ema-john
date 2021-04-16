import React from 'react';
import './Product.css';

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
                <p>Only {stock} copy in Stock - Order Soon </p>
            </div>
        </div>
        
    );
};

export default Product;