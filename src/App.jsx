import { Route, Routes } from "react-router-dom"
import BtnHeader from "./Components/header/BtnHeader"
import TopHeader from "./Components/header/TopHeader"
import Home from "./Page/Home/Home"
import ProductDetails from "./Page/ProductDetails/ProductDetails"
import Cart from "./Page/Cart/Cart"
import { Toaster } from "react-hot-toast"
import ScrollToTop from "./Components/ScrollToTop"
import { AnimatePresence } from "framer-motion"
import CategoryPage from "./Page/CategoryPage/CategoryPage"
import SearchResults from "./Page/SearchResults"
import Favorites from "./Page/Favorites/Favorites"


function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtnHeader />
      </header>
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#e9e9e9',
          borderRadius: '5px',
          padding: '14px',
        }
      }} />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>

    </>
  )
}

export default App
