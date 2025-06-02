import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";


let NavLinks =[
    {title:"Home",link:"/"},
    {title:"About",link:"/about"},
    {title:"Accessories",link:"/accessories"},
    {title:"Blog",link:"/blog"},
    {title:"Contact",link:"/contact"},
]
function BtnHeader() {
        let location = useLocation()
        let [categories,setCategories] = useState([]);
        let [isCategoryOpen,setIsCategoryOpen] = useState(false)

        useEffect(()=>{
            setIsCategoryOpen(false)
        },[location])
    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then((res)=> res.json())
        .then((data)=>setCategories(data)
        )
    },[])
  return (
    <div className='btn_header'>
        <div className="container">
            <nav className="nav">
                <div className="category_nav">
                    <div className="category_btn" onClick={()=>setIsCategoryOpen(!isCategoryOpen)}>
                        <IoMdMenu />
                        <p>Browse Category</p>
                        <MdOutlineArrowDropDown />
                    </div>
                    <div className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}>
                        {categories.map((category)=>(
                            <Link key={category.slug} to={`category/${category.slug}`}>{category.name}</Link>
                        ))}
                    </div>
                </div>
                <div className="nav_links">
                    {NavLinks.map((item)=>(
                        <li key={item.link} className={location.pathname === item.link ? "active" :""}><Link to={item.link}>{item.title}</Link></li>
                    ))}
                </div>
            </nav>
            <div className="sign_reg_icon">
                <Link to="/"><PiSignInBold /></Link>
                <Link to="/"><FaUserPlus /></Link>
            </div>
        </div>
    </div>
  )
}

export default BtnHeader