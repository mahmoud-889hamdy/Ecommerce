import React, { useEffect, useState } from 'react'
import HeroSlider from '../../Components/HeroSlider'
import './Home.css'
import SlideProduct from '../../Components/SlideProducts/SlideProduct'
import SlideProductLoading from '../../Components/SlideProducts/SlideProductLoading'
import PageTransition from '../../Components/PageTransition'

let categories = [
  "smartphones",
  "sports-accessories",
  "mens-watches",
  "kitchen-accessories",
  "groceries",
  "fragrances",

]
function Home() {

  let [products, setProducts] = useState({})
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    let fetchProducts = async () => {
      try {
        let results = await Promise.all(
          categories.map(async (category) => {
            let res = await fetch(`https://dummyjson.com/products/category/${category}`);
            let data = await res.json();
            return { [category]: data.products }
          })
        )
        let productsData = Object.assign({}, ...results)
        setProducts(productsData)
      } catch (error) {
        console.error("Error Fetching", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])
  return (
    <PageTransition>
      <div>
        <HeroSlider />
        {loading ? (
          categories.map((category) => (
            <SlideProductLoading key={category} />
          )
          )
        ) : (
          categories.map((category) => (
            <SlideProduct key={category} data={products[category]} title={category.replace("-", " ")} />

          )
          )
        )}

      </div>
    </PageTransition>
  )
}

export default Home