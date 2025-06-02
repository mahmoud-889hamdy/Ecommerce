import React, { useContext } from 'react';
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { FaCheck } from "react-icons/fa";
import toast from 'react-hot-toast';




function Product({ item }) {
  let navigate = useNavigate()
  let { cartItems, addToCart, addToFavorites, favorites, removeFromFavorites } = useContext(CartContext)
  let isInCart = cartItems.some(i => i.id === item.id)

  let handleAddtoCart = () => {
    addToCart(item)
    toast.success(
      <div className="toast-wrapper">
        <img className='toast-img' src={item.images[0]} alt="" />
        <div className="toast-content">
          <strong>{item.title}</strong>
          Added To Cart
          <div>
            <button onClick={() => navigate('/cart')} className='btn'>View Cart</button>
          </div>
        </div>
      </div>
      , { duration: 3500 }
    )
  }
  let isInFav = favorites.some(i => i.id === item.id)
  let handleAddtoFav = () => {
    if (isInFav) {
      removeFromFavorites(item.id)
      toast.error(`${item.title} Removed From Favorites `)
    } else {
      toast.success(`${item.title} Added To Favorites `)
      addToFavorites(item)
    }
  }
  return (
    <div className={`product ${isInCart ? 'in-cart' : ''}`}>
      <Link to={`/products/${item.id}`}>
        <span className="status_cart"><FaCheck /> in cart</span>
        <div className="img_product">
          <img
            src={item.images[0]}
            alt="" />
        </div>
        <p className="name_product">
          {item.title}
        </p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfStroke />
        </div>
        <p className='price'><span>$ {item.price}</span></p>
      </Link>
      <div className="icons">
        <span className='btn_addtocart' onClick={handleAddtoCart}><FaCartArrowDown /></span>
        <span className={`${isInFav ? "in-Fav": ""}`} onClick={handleAddtoFav}><FaRegHeart /></span>
        <span><FaShare /></span>
      </div>
    </div>
  );
}

export default Product;
