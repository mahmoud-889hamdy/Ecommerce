import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import SlideProduct from '../../Components/SlideProducts/SlideProduct'
import ProductDetailsLoading from './ProductDetailsLoading'
import SlideProductLoading from '../../Components/SlideProducts/SlideProductLoading'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'
import PageTransition from '../../Components/PageTransition'

function ProductDetails() {
    let { id } = useParams()
    let [product, setProduct] = useState(null)
    let [loading, setLoading] = useState(true)
    let [relatedProducts, setRelatedproducts] = useState([])
    let [LoadingrelatedProducts, setLoadingrelatedProducts] = useState(true)

    useEffect(() => {
        let fetchProduct = async () => {
            try {
                let res = await fetch(`https://dummyjson.com/products/${id}`)
                let data = await res.json()
                setProduct(data)
                setLoading(false)
            } catch (error) {

            }
        }
        fetchProduct()
    }, [id])


    useEffect(() => {
        if (!product) return
        fetch(`https://dummyjson.com/products/category/${product.category}`)
            .then((res) => res.json())
            .then((data) => {
                setRelatedproducts(data.products)
            }).catch((error) => console.error(error))
            .finally(() => setLoadingrelatedProducts(false))
    }, [product?.category])
    if (!product) return <p>Product Not Found</p>
    return (

        <PageTransition key={id}>
            <div>
                {loading ? (
                    <ProductDetailsLoading />
                ) : (
                    <div className='item_details'>
                        <div className="container">
                            <ProductImages product={product} />
                            <ProductInfo product={product} />
                        </div>
                    </div>
                )}
                {LoadingrelatedProducts ? (
                    <SlideProductLoading />
                ) : (
                    <SlideProduct key={product.category} data={relatedProducts} title={product.category.replace("-", " ")} />
                )}
            </div>
        </PageTransition>
    )
}

export default ProductDetails