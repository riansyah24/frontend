export default function Title(props) {
  return(
    <div>
      <h1>{props.title}</h1>
      <h1>{props.price}</h1>
      <div className="flex">
        <button>-</button>
        <p>0</p>
        <button>+</button>
      </div>
      <button>Add to cart</button>
    </div>
    )
}