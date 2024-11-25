export default function List() {
  return(
    <div className="flex justify-between items-center border-2 border-black p-3 rounded">
      <div className="flex items-center"> 
        <div>image</div>
        <div className="px-5">
          <h1 className="text-xl">title</h1>
          <div className="flex">
            <button>-</button>
            <p>0</p>
            <button>+</button>
          </div>
        </div>
      </div>
      <div>Price</div>
    </div>
    )
}