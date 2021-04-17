import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    //Reduce Method - But we can do it by loop also
    // const totalPrice = cart.reduce((total,prd) => total + prd.price,0)
    const convertNumber = num => {
        const conNum = num.toFixed(2);
        return Number(conNum) // here this function returs a number value with converted toFixed Number
        // Number() this is used for converting a string to number.
        // i could simply return conNum , and this won't make major diff. except string value
    }
    let total = 0;
    for( let i = 0 ; i < cart.length ; i++){
        const Product = cart[i];
        total = total + Product.price;
    }
    let tax = 0;
    if(total > 35){
        tax = 0;
    }
    else if (total > 15){
        tax = 4.99;
    }
    else if (total > 0){
        tax = 12.99;
    }

    let vat = total / 10;
    const grandTotal = total + vat + tax;
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Pending Order : {cart.length}</p>
            <p>Product Price : {convertNumber(total)}</p>
            <p>VAT + Tax : {convertNumber(vat)}</p>
            <p><small>Shipping charge : {tax} </small></p>
            <p>Total Price :  ${convertNumber(grandTotal)}</p>
            <button className='cart-btn'>Review Your Order</button>
        </div>
    );
};

export default Cart;