export default function RelatedContent(props) {
  return(
    <div className="p-2">
      <div>
        <h1 className="text-2xl font-bold">Related content</h1>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {props.card}
      </div>
    </div>
    )
}