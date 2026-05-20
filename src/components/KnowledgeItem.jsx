function KnowledgeItem({ doc, deleteDocument }) {

  return (

    <div className="knowledge-card">

      <h3>{doc.title}</h3>

      <p>{doc.description}</p>

      <button
        className="delete-btn"
        onClick={() =>
          deleteDocument(doc.id)
        }
      >
        Delete
      </button>

    </div>
  )
}

export default KnowledgeItem