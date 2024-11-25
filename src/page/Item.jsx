import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "../components/item/Navbar.jsx"
import Title from "../components/item/Title.jsx"
import ImageContent from "../components/item/ImageContent.jsx"
import Description from "../components/item/Description.jsx"
import RelatedContent from "../components/item/RelatedContent.jsx"
import Card from "../components/item/Card.jsx"

export default function Item() {
  let [data, setData] = useState([])
  let [quantity, setQuantity] = useState(1)
  let [dataContent, setDataContent] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/1`)
    .then(res => setData(res.data))
  },[])
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return(
    <div>
      <Navbar/>
      <div className="p-2 flex flex-col lg:flex-row lg:items-center">
        <ImageContent image={data.image}/>
        <Title title={data.title} price={numberWithCommas(data.price*16000)} quantity={quantity}/>
      </div>
      <Description desc={data.description}/>
      <RelatedContent card={<Card/>}/>
    </div>
    )
}