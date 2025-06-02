import React, { useContext } from 'react'
import { CartContext } from '../../Components/Context/CartContext'
import { FaTrashAlt } from "react-icons/fa";
import './Cart.css'
import PageTransition from '../../Components/PageTransition';


function Cart() {
    let { cartItems , increaseQuantity, removeFromCart,decreaseQuantity} = useContext(CartContext)
    let total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return (
        <PageTransition>
                    <div className='checkout'>
            <div className="ordersummary">
                <h1>Order Summary</h1>
                <div className="items">
                    {cartItems.length === 0 ? (
                        <p>Your Cart is Empty</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div className="item_cart" key={index}>
                                <div className="image_name">
                                    <div className="img_item">
                                        <img src={item.images[0]} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>{item.title}</h4>
                                        <p className='price_item'>${item.price}</p>
                                        <div className="quantity_control">
                                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                            <span className='quantity'>{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="delete_item"><FaTrashAlt /></button>
                            </div>
                        ))
                    )}
                </div>
                <div className="bottom_summary">
                    <div className="shop_table">
                        <p>Total:</p>
                        <span className="total_checkout">${total.toFixed(2)}</span>
                    </div>
                    <div className="button_div">
                        <button type='submit'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
        </PageTransition>
    )
}

export default Cart