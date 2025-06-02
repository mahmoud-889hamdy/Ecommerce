import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransition from '../Components/PageTransition'
import SlideProductLoading from '../Components/SlideProducts/SlideProductLoading'
import Product from '../Components/SlideProducts/Product'

function SearchResults() {
    let [results , setResults] = useState([])
    let query = new URLSearchParams(useLocation().search).get("query")
    let [loading,setLoading] = useState(true)

    useEffect(()=>{
        let fetchResults = async () =>{
            try{
                let res = await fetch(`https://dummyjson.com/products/search?q=${query}`

                )
                let data = await res.json();
                setResults(data.products || [])
            }catch(error){
                console.error("Search Error:" , error)
            }finally{
                setLoading(false)
            }
        }
        if(query) fetchResults();
    },[query])
  return (
            <PageTransition key={query}>        
            
            <div className="category_products">
            {loading ? (<SlideProductLoading key={query}/>) :results.length > 0 ? (
                 <div className="container">
                <div className="top_slide">
                    <h2>Results For : {query}</h2>
                </div>
                <div className="products">
                    {results.map((item, index) => (
                        <Product item={item} key={index} />
                    ))}
                </div>
            </div>
        ):<div className='container'><p>No Results Found.</p></div>}
        </div>
            </PageTransition>

  );
}

export default SearchResults