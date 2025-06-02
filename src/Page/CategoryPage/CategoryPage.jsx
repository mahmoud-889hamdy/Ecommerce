import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../Components/SlideProducts/Product'
import './CategoryPage.css'
import SlideProductLoading from '../../Components/SlideProducts/SlideProductLoading'
import PageTransition from '../../Components/PageTransition'


function CategoryPage() {
    let { category } = useParams()
    let [categoryProducts, setCategoryProducts] = useState([])
    let [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setCategoryProducts(data)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [category])
    return (
        <PageTransition key={category}>
        <div className="category_products">
            {loading ? <SlideProductLoading key={category}/> : <div className="container">
                <div className="top_slide">
                    <h2>{category} : {categoryProducts.limit}</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, incidunt.</p>
                </div>
                <div className="products">
                    {categoryProducts.products.map((item, index) => (
                        <Product item={item} key={index} />
                    ))}
                </div>
            </div>}

        </div>
        </PageTransition>
    )
}

export default CategoryPage