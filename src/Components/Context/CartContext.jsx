import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export let CartContext = createContext()

export default function CartProvider({ children }) {
    let [favorites, setFavorites] = useState(() => {
        let savedFav = localStorage.getItem('favoritesItems')
        return savedFav ? JSON.parse(savedFav) : [];
    });
    let addToFavorites = (item) =>{
        setFavorites((prev) =>{
            if(prev.some((i) => i.id === item.id)) return prev;
            return[...prev,item]
        })
    }
    useEffect(()=>{
        localStorage.setItem('favoritesItems' , JSON.stringify(favorites))
    },[favorites])


    let removeFromFavorites = (id) =>{
        setFavorites((prev) => prev.filter((i) => i.id !== id))
    }












    let [cartItems, setCartItems] = useState(() => {
        let savedCart = localStorage.getItem('cartItems')
        return savedCart ? JSON.parse(savedCart) : []
    })

    let increaseQuantity = (id) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ))
    }

    let decreaseQuantity = (id) => {
        setCartItems(prevItems => prevItems.map(item => item.id === id && item.quantity > 1 ?
            { ...item, quantity: item.quantity - 1 } : item
        ))
    }


    let removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    let addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }])
    }
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])
    return (
        <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, addToFavorites, favorites , removeFromFavorites}}>
            {children}
        </CartContext.Provider>
    )
}
