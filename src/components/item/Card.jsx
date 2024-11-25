export default function Card(props) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return(
    <div className="border-2 border-black p-3 rounded flex flex-col gap-1">
      <img src={props.image} className="aspect-square object-contain"/>
      <h1 className="truncate text-xl">{props.title}</h1>
      <h1 className="text-xl object-contain font-bold">Rp. {numberWithCommas(props.price * 16000)}</h1>
      <button className="bg-black text-white w-full rounded p-1 font-bold">Add to cart</button>
    </div>
    )
}