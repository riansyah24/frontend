import Navbar from "../components/cart/Navbar.jsx"
import List from "../components/cart/List.jsx"

export default function Cart() {
  return(
    <div>
      <Navbar/>
      <div className="p-3">
      <List />
      </div>
    </div>
    )
}