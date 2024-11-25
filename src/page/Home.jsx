import { useState, useEffect } from "react"
import Navbar from "../components/home/Navbar.jsx"
import InputSearch from "../components/home/InputSearch.jsx"
import Card from "../components/home/Card.jsx"
import axios from "axios"

export default function Home() {
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(res => setData(res.data))
  },[])
  return(
    <div>
      <Navbar/>
      <InputSearch/>
      <div className="grid grid-cols-2 gap-3 p-3 lg:grid-cols-4">
      {
        data.map(data => <Card title={data.title} price={data.price} image={data.image}/>)
      }
      </div>
    </div>
    )
}