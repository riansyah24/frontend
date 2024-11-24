export default function ImageContent(props) {
  return(
    <div className="flex justify-center">
      <img src={props.image} className="aspect-square object-contain w-3/4"/>
    </div>
    )
}