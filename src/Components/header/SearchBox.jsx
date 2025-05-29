import { img, li } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function SearchBox() {
    let [searchTerm, setSearchTerm] = useState("");
    let [suggestions, setSuggestions] = useState([])
    let navigate = useNavigate()
    let location = useLocation()
    let handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`)
        }
        setSuggestions([])
    }
    useEffect(() => {
        let fetchSuggestions = async () => {
            if (!searchTerm.trim()) {
                setSuggestions([])
                return;
            }
            try {
                let res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
                let data = await res.json();
                setSuggestions(data.products.slice(0, 5) || [])
            } catch (error) {
                console.error("Search Error:", error)
                setSuggestions([])
            }
        }
        let debonuce = setTimeout(() => {
            fetchSuggestions()
        }, 300)
        return () => clearTimeout(debonuce)
    }, [searchTerm])
    useEffect(() => {
        setSuggestions([])
    }, [location])
    return (
        <div className="search_box_container">
            <form onSubmit={handleSubmit} className="search_box">
                <input type="text" name='search' id='search' placeholder='Search For Products' onChange={(e) => setSearchTerm(e.target.value)} autoComplete='off' />
                <button type="submit"><FaSearch /></button>
            </form>
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((item) => (
                        <Link to={`/products/${item.id}`}><li key={item.id}><img src={item.images[0]} alt="" /> <span>{item.title}</span></li></Link>

                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchBox