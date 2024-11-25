export default function RelatedContent(props) {
  return(
    <div className="p-2">
      <div>
        <h1 className="text-2xl font-bold">Related content</h1>
      </div>
      <div>
      {props.card}
      </div>
    </div>
    )
}