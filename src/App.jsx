import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "./components/Navbar.jsx"
import Title from "./components/Title.jsx"
import ImageContent from "./components/ImageContent.jsx"
import Description from "./components/Description.jsx"
import RelatedContent from "./components/RelatedContent.jsx"
import Card from "./components/Card.jsx"

export default function App() {
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/1`).then(res => setData(res.data))
  },[])
  return(
    <div>
      <Navbar/>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <ImageContent image={data.image}/>
        <Title title={data.title} price={data.price}/>
      </div>
      <Description desc={data.description}/>
      <RelatedContent card={"anjay"}/>
    </div>
    )
}