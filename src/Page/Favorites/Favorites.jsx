import React, { useContext } from 'react'
import { CartContext } from '../../Components/Context/CartContext'
import PageTransition from '../../Components/PageTransition'
import { p } from 'framer-motion/client'
import Product from '../../Components/SlideProducts/Product'



function Favorites() {
    let { favorites } = useContext(CartContext)
    return (
        <PageTransition>
            <div className="category_products favoritesPage">
                <div className="container">
                    <div className="top_slide">
                        <h2>Your Favorites</h2>
                    </div>
                    {favorites.length === 0 ? (
                        <p>No Favorites Products Yet.</p>
                    ) : (
                        <div className="products">
                            {favorites.map(item => (
                                <Product item={item} key={item.id} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </PageTransition>
    )
}

export default Favorites