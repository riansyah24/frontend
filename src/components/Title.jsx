export default function Title(props) {
  return(
    <div className="flex gap-3 flex-col mt-3 lg:w-1/4 lg:mt-0">
      <h1 className="text-2xl">{props.title}</h1>
      <h1 className="text-2xl">Rp.{props.price}</h1>
      <div className="flex justify-between ">
        <button>-</button>
        <p>{props.quantity}</p>
        <button>+</button>
      </div>
      <button className="bg-black text-white font-bold rounded w-full p-3">Add to cart</button>
    </div>
    )
}