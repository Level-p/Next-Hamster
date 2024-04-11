
export default function Results({results}) {
  return (
    <div className="flex flex-col">
      {
        results.map((result) => (
          <div key={result.id}>
            <h2>{result.original_title}</h2>
          </div>
        ))
      }
    </div>
  )
}
