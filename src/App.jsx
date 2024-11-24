import Navbar from "./components/Navbar.jsx"
import Title from "./components/Title.jsx"
import ImageContent from "./components/ImageContent.jsx"
import Description from "./components/Description.jsx"
import RelatedContent from "./components/RelatedContent.jsx"
import Card from "./components/Card.jsx"

export default function App() {
  return(
    <div>
      <Navbar/>
      <ImageContent/>
      <Title/>
      <Description desc={"hehe"}/>
      <RelatedContent card={"anjay"}/>
    </div>
    )
}