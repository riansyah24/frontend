import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home.jsx"
import Item from "./page/Item.jsx"
import Cart from "./page/Cart.jsx"

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/item" element=<Item /> />
        <Route path="/cart" element=<Cart/> />
      </Routes>
    </BrowserRouter>
    )
}