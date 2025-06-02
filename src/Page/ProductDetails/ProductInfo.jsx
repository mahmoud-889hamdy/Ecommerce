import React, { useContext } from 'react'
import { FaRegHeart, FaShare, FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../Components/Context/CartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ProductInfo({ product }) {
    let { cartItems, addToCart, addToFavorites, favorites, removeFromFavorites } = useContext(CartContext)
    let isInCart = cartItems.some(i => i.id === product.id)
    let navigate = useNavigate()


    let handleAddtoCart = () => {
        addToCart(product)
        toast.success(
            <div className="toast-wrapper">
                <img className='toast-img' src={product.images[0]} alt="" />
                <div className="toast-content">
                    <strong>{product.title}</strong>
                    Added To Cart
                    <div>
                        <button onClick={() => navigate('/cart')} className='btn'>View Cart</button>
                    </div>
                </div>
            </div>
            , { duration: 3500 }
        )
    }


    let isInFav = favorites.some(i => i.id === product.id)
    let handleAddtoFav = () => {
        if (isInFav) {
            removeFromFavorites(product.id)
            toast.error(`${product.title} Removed From Favorites `)
        } else {
            toast.success(`${product.title} Added To Favorites `)
            addToFavorites(product)
        }
    }
    return (
        <div className="details_item">
            <h1 className='name'>{product.title}</h1>
            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
            </div>
            <p className='price'>$ {product.price}</p>
            <h5>Availability: <span>{product.availabilityStatus}</span></h5>
            <h5>Brand: <span>{product.brand}</span></h5>
            <p className='desc'>{product.description}</p>
            <h5 className='stock'><span>Hurry Up! Only{product.stock}Products left in stock.</span></h5>
            <button onClick={handleAddtoCart} className={`btn  ${isInCart ? 'in-cart' : ''}`}>
                {isInCart ? "Item in Cart" : "Add To Cart"}  <TiShoppingCart />
            </button>
            <div className="icons">
                <span className={`${isInFav ? "in-Fav" : ""}`} onClick={handleAddtoFav}><FaRegHeart /></span>
                <span><FaShare /></span>
            </div>
        </div>
    )
}

export default ProductInfo